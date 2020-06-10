// pages/concent/concent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId:null,
    postView:null,
    itemvalue:null
  },
  getPostView:function(id){
    wx.request({
      url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid='+id,
      success:(res)=>{
        this.setData({
          postView:res.data.data
        })
      },
      complete:()=>{

      }
    })
  },
  toggleUrl(e){
    // console.log(e.currentTarget.id)
    this.setData({
      postId: e.currentTarget.id
    })
    this.getPostView(this.data.postId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      postId:this.options.postid
    })

    this.getPostView(this.data.postId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})