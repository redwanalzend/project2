import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCampaign = createAsyncThunk(
  'campaign/fetchAll',
  async () => {
    const response  = await fetch('https://wawinner.its.ae/dev/public/api/v1/front-end/campaign')
    const campaign = await response.json()
    return campaign.data
  }
)

const campaignSlice = createSlice({
    name: 'campaign',
    initialState: {
      data:[],
      isFetching:true
    },
    reducers: {},
    extraReducers:{
      [fetchCampaign.pending]:(state,action)=>({
        ...state,
        isFetching:true
      }),
      [fetchCampaign.fulfilled]:(state,action)=>({
        ...state,
        isFetching:false,
        data:action.payload
      })

    }
  })

export default campaignSlice.reducer