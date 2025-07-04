import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../Date/Date";

const articalSlice = createSlice({
    name : "articles" ,
    initialState,
    reducers:{
        choseOne:(state) =>{
              state.mainArticle = state.articles[0]
        },
        CHOSEFOUR:(state) =>{
              state.fourArticle= state.articles[3]
        },
        TWOITEM:(state) =>{
              state.twoArticle = state.articles.slice(1,3);
        },
        setPage: (state, action ) => {
            state.currentPage = action.payload;
        },
       SLICENINEITEM: (state, action) => {
        const excludedId = action.payload;
        state.nineitem = state.articles.filter(item => item.id !== excludedId).slice(0, 9);     
        },
        THREEITEM: (state : any) =>{
            state.threeitem = state.articles.slice(0 , 3)
        }


    }
   

})
export const {choseOne , TWOITEM , setPage ,CHOSEFOUR , SLICENINEITEM ,THREEITEM } = articalSlice.actions;
export default articalSlice.reducer;