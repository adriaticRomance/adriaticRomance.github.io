// pages/find/index.js
Page({
  onClickLeft() {
    // wx.showToast({
    //   title: '点击返回',
    //   icon: 'none'
    // });
  },
  onClickRight() {
    // wx.showToast({
    //   title: '点击按钮',
    //   icon: 'none'
    // });
  },
  tranlationTime(duration) {
    var m, s, time;
    m = Math.floor(duration / 60);
    s = duration - (60 * m);
    if (s < 10) {
      s = '0' + s
    }
    time = m + "'" + s + "'"
    // console.log(time)

  },
  getcardLIst() {
    for (var index in this.data.discoveryShowList.data.data.today.list) {
      if (index >= 1) {
        this.data.cradlist.push(this.data.discoveryShowList.data.data.today.list[index])
      }
    }
    // console.log(this.data.cradlist)
  },
  getCateList() {
    var cachedCateList = wx.getStorageSync('cataList')
    if (cachedCateList) {
      cachedCateList = JSON.parse(cachedCateList)
    }
    if (cachedCateList.expires > Date.now()) {
      this.setData({
        cataList: cachedCateList.data
      })
    } else {
      this.showOverlay()
      wx.request({
        url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/cate/getList',
        success: (res) => {
          // console.log(res)
          if (res.data.data) {
            wx.setStorage({
              key: 'cataList',
              data: JSON.stringify({
                expires: Date.now() + 3 * 60 * 60 * 100,
                data: res.data.data
              })
            })
            this.setData({
              cateList: res.data.data
            })
          } else {
            // return
          }
        },
        fail: () => {

        },
        complete: () => {
          this.hideOverlay()
        }
      })
    }

  },
  getShow() {
    var cachedShowList = wx.getStorageSync('ShowList')
    if (cachedShowList) {
      cachedShowList = JSON.parse(cachedShowList)
    }
    if (cachedShowList.expires > Date.now()) {
      this.setData({
        discoveryShowList: cachedShowList
      })
    } else {
      wx.request({
        url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/index/index',
        success: (res) => {
          wx.setStorage({
            key: 'ShowList',
            data: JSON.stringify({
              expires: Date.now() + 3 * 60 * 60 * 100,
              data: res.data
            }),
          })
          this.setData({
            discoveryShowList: res,
          })
        }
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    show: false,
    cataList: [],
    discoveryShowList: [],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    cradlist: []
  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
  },
  gotoList(e) {
    // console.log(e.cateId)
    wx.navigateTo({
      url: '/pages/posts/posts?id=' + e.currentTarget.dataset.cateid,
    })
  },
  gotoConcent: function (e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../concent/concent?postid=' + e.currentTarget.id,
    })

  },
  showOverlay() {
    this.setData({
      show: true
    })
  },
  hideOverlay() {
    this.setData({
      show: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCateList()
    this.getShow()
    this.getcardLIst()
    this.tranlationTime(208)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log(this.data.cradlist)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // console.log(this.data.cradlist)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  // 下拉刷新页面
  onPullDownRefresh: function() {
    //在标题栏中显示加载
    wx.showNavigationBarLoading()
    //当逻辑执行完后关闭刷新   
    setTimeout(function(){
      wx.stopPullDownRefresh()
    },3000) 
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})