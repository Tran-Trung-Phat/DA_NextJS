const { createSlice } = require('@reduxjs/toolkit');

const saveToLocalStorage = (state) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(state));
  }
};

const cartSlice = createSlice({
  name: 'giohang',
  // nơi lưu trữ thông tin giỏ hàng
  initialState: {
    sanpham: [],
    sosp: 0,
    tongtien: 0,
  },

  reducers: {
    //thêm sản phẩm hoặc cập nhật số lượng
   themHoacCapNhat: (state, action) => {
    const spnew = action.payload;
    if (!spnew) return;
    if (!Array.isArray(state.sanpham)) state.sanpham = [];
    const spold = state.sanpham.find(sp => sp.id === Number(spnew.id) && sp.mau === spnew.mau && sp.size === spnew.size);
    //nếu khhong có sản phẩm trong giỏ hàng
    if(spold === undefined){
      // thêm sản phẩm vào giỏ hàng
      state.sanpham.push(spnew);
      state.sosp ++;
      state.tongtien = state.sanpham.reduce((tt,sp) => tt +(sp.soluong * sp.gia), 0);
    }else{
      // sản phẩm đã có trong giỏ hàng
      
      if (spnew.soluong > 0) {
        //tăng số lượng sản phẩm
        spold.soluong += spnew.soluong;
        state.tongtien = state.sanpham.reduce((tt, sp) => tt + (sp.soluong * sp.gia), 0);
      } else {
        // giảm số lượng
        if (spold.soluong > Math.abs(spnew.soluong)) {
          spold.soluong -= Math.abs(spnew.soluong);
          state.tongtien = state.sanpham.reduce((tt, sp) => tt + (sp.soluong * sp.gia), 0);
        } else {
          // xóa sản phẩm khỏi giỏ hàng
          state.sanpham = state.sanpham.filter(sp => !(sp.id === Number(spnew.id) && sp.mau === spnew.mau && sp.size === spnew.size));
          state.sosp--;
          state.tongtien = state.sanpham.reduce((tt, sp) => tt + (sp.soluong * sp.gia), 0);
        }
      }
    }
    saveToLocalStorage(state);
  }
   ,
    // xóa sản phẩm
    xoasanpham: (state, action) =>{
      if (!Array.isArray(state.sanpham)) state.sanpham = [];
      // Kiểm tra nếu payload là object chứa id, mau, size để xóa chính xác variant
      if (typeof action.payload === 'object' && action.payload.id) {
        const { id, mau, size } = action.payload;
        const spGH = state.sanpham.find(sp => sp.id === Number(id) && sp.mau === mau && sp.size === size);
        if (spGH) {
          state.sanpham = state.sanpham.filter(sp => !(sp.id === Number(id) && sp.mau === mau && sp.size === size));
          state.sosp--;
          state.tongtien = state.sanpham.reduce((tt, sp) => tt + (sp.soluong * sp.gia), 0);
        }
      } else {
        // Xóa theo ID (giữ tương thích cũ hoặc xóa tất cả biến thể của ID đó)
        const id = action.payload;
        const initialLength = state.sanpham.length;
        state.sanpham = state.sanpham.filter(sp => sp.id !== Number(id));
        state.sosp -= (initialLength - state.sanpham.length); // Cập nhật đúng số lượng sản phẩm bị xóa
        state.tongtien = state.sanpham.reduce((tt, sp) => tt + (sp.soluong * sp.gia), 0);
      }
      saveToLocalStorage(state);
    },
    // Xóa hết giỏ hàng khi thanh toán thành công
    xoahet: (state) => {
      state.sanpham = [];
      state.sosp = 0;
      state.tongtien = 0;
      saveToLocalStorage(state);
    },
    napGioHang: (state, action) => {
      if (action.payload) {
        state.sanpham = Array.isArray(action.payload.sanpham) ? action.payload.sanpham : [];
        state.sosp = action.payload.sosp || 0;
        state.tongtien = action.payload.tongtien || 0;
      }
    }
  }

});

export default cartSlice.reducer;
export const { themHoacCapNhat, xoasanpham, xoahet, napGioHang } = cartSlice.actions;