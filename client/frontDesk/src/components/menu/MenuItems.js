const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: 250, img: "https://imgs.search.brave.com/CLnKG2Q2AKTKBZR9zs4aWVvLdGm-DmvdiJRXEQMXULI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/OTY2LzAzNC9zbWFs/bC9jdXAtb2YtY29m/ZmVlLXN0YW5kaW5n/LW9uLXJ1c3RpYy13/b29kZW4tdGFibGUt/aW4tY2FmZS1waG90/by5qcGc" },
      { name: "Americano", price: 270, img: "https://imgs.search.brave.com/EPDvSgKl0pJBgwRAjlj5EombiwlNKPI9fC0HiPImZLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/Nzk5LzEyNi9zbWFs/bC9jdXAtb2YtYW1l/cmljYW5vLWJsYWNr/LWNvZmZlZS1pbi1y/ZXN0YXVyYW50LWNh/ZmUtaW4tbWV4aWNv/LWZyZWUtcGhvdG8u/anBn" },
      { name: "Cappuccino", price: 350, img : "https://imgs.search.brave.com/on9Xln58sK22do0YRSVA9Y6bhwx_C5UVMNjWigH4rhI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA1/MTY4MzMwL3Bob3Rv/L2N1cC1vZi1jYWZl/LWxhdHRlLXdpdGgt/Y29mZmVlLWJlYW5z/LWFuZC1jaW5uYW1v/bi1zdGlja3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWg3/djhrQWZXT3BSYXB2/NmhyRHdtbUI1NERx/ckdRV3hsaFBfbVRl/cVRRUEE9" },
      { name: "Latte", price: 380, img: "https://imgs.search.brave.com/lPAm__2-xW_LV5_GfNNbU7-xKqezTzHbXC1B-5ZspXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q4L0NhZmZlX0xh/dHRlX2F0X1B1bHNl/X0NhZmUuanBn" },
      { name: "Mocha", price: 400, img: "https://imgs.search.brave.com/Tk90pEUWcAggmFrKXL-Y8iBooY-rsRVWF9aj3oZMqS4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9tbXloYXRlc2Nv/b2tpbmcuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEw/L21vY2hhLTEtNjAw/eDU2OC5qcGc" }
    ]
  },
  {
    category: "Tea",
    items: [
      { name: "Green Tea", price: 200, img: "https://imgs.search.brave.com/2NjbBdeAYHT2OdBDZ7VUnjFJSNioV_LFTYr_TgftpwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjUv/MDYwLzU3My9zbWFs/bC91bmZpbmlzaGVk/LXR1cnF1b2lzZS1j/dXAtb2YtdGVhLW9u/LWEtdGFibGUtaW4t/YS1jYWZlLWluLXRo/ZS1zdW5saWdodC1w/aG90by5qcGc" },
      { name: "Black Tea", price: 180, img: "https://imgs.search.brave.com/vEGmIiTmsZL0xb0R812D0KQzpES66YzuG3T_RHOJqWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQ3/MDkzNzU2L3Bob3Rv/L2N1cC1vZi1ncmVl/bi10ZWEtb24tYS12/aW50YWdlLXJ1c3Rp/Yy13b29kLWJsdXJy/eS1vci1ib2tlaC1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1y/ZXkxRmZnUXk4SDFj/N0JJRGJ3bkhVV3k0/M1pmalBmcFdycW11/cC0zaDVBPQ" },
      { name: "Chai Latte", price: 300, img: "https://imgs.search.brave.com/OQJ5YQZkOpVq9md237L6iavvEMt_cG4KJwZtzIMmNSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/ODM4NTg0MC9waG90/by9jaGFpLWxhdHRl/LWluLWdsYXNzLW11/Zy1hdC1jYWZlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Z/X2Fla2NBdUhRNEJC/MlNQcDNNYVk2MUJ6/UXRhWkVhSlZOUkdG/M3YyUERNPQ" },
      { name: "Earl Grey", price: 250, img: "https://imgs.search.brave.com/hU0akZl3UFC3egReHq8h_Ig_c04Zu0Aq_jFwZWhLr5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk2/MjMxMzIwL3Bob3Rv/L3RlYWJhZ3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXBz/Q0Y4UG9yOERjcE9p/YUxYV3BmSDZPb2FM/NHg5R0VaUjdyQUph/bG54ZDg9" },
      { name: "Chamomile", price: 220, img: "https://imgs.search.brave.com/_owzL2kLjTM82Z2eqXIFQ5vgLKq5vAfIuOoXCZGIsYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDMv/MDMzLzc3Mi9zbWFs/bC9jaGFtb21pbGUt/dGVhLXNlcnZlZC1p/bi1hLWNvenktY2Fm/ZS1waG90by5qcGc" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Chocolate Croissant", price: 300, img: "https://imgs.search.brave.com/Rwfn_Rl11Ka8h65zDrKlw18u7endm5Dx9BFUKLlAL6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci8xWEFm/RWZPWS1ZVGc2c3J1/alB4dDAxNU5ZVjA9/LzB4MDoyMDAweDEz/MzMvMTIwMHg5MDAv/ZmlsdGVyczpmb2Nh/bCg4NDB4NTA3OjEx/NjB4ODI3KTpub191/cHNjYWxlKCkvY2Ru/LnZveC1jZG4uY29t/L3VwbG9hZHMvY2hv/cnVzX2ltYWdlL2lt/YWdlLzczMzU0NTA2/LzIwMjNfMDFfMjVf/Q2FyX0FydGlzYW5f/Q2hvY29sYXRlXzA0/OS4wLmpwZw" },
      { name: "Blueberry Muffin", price: 280, img: "https://imgs.search.brave.com/ndj0dSY0MtJk0MWhwI-kdMhb5t92RAnbmhpwBItKmTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/Njc0NTc2L3Bob3Rv/L21vcm5pbmctbXVm/Zmlucy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9c3FZT0I4/N0hwUGZSUjZhQUg2/ZzZUTkdSekYwdko2/S0x1Zy1EalBlQ1hC/RT0" },
      { name: "Almond Danish", price: 350, img: "https://imgs.search.brave.com/HY_1N2IWygFJIsWnla717pkj5lDAxXvfj7LWpQvmowM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5cmVjaXBl/cy5jb20vdGhtYi9O/U3Z1aV9lSHBpaGhf/VExNckR0ZVRmMWcz/QVE9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9TaW1wbHktUmVj/aXBlcy1EYW5pc2gt/S3JpbmdsZS1MZWFk/LTItNzA3NjM2N2Q1/MWU1NDg4MjlmOTQ5/ODQ5MDBjMDg0NDku/anBn" },
      { name: "Cinnamon Roll", price: 300, img: "https://imgs.search.brave.com/gQIN74A5nplF6UoQ8-FPeF-rwG7Iw56RFeZdXZ-GUxg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzQyLzE5Lzk0/LzM2MF9GXzEyNDIx/OTk0NTBfNWE0SW0z/c2lDWHZBMnVMc1d5/dTFubGw0NmZzUzNr/QjguanBn" },
      { name: "Milk Cake", price: 180, img: "https://imgs.search.brave.com/zp61M05A7VFLLNsj8xWWphHQOkX2AO7CsSB-m_540PA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MjQ0OTg4Ny9waG90/by90cmlsZWNlLWNh/a2Utc2xpY2Utb24t/ZGFyay1iYWNrZ3Jv/dW5kLW1pbGstYW5k/LWNhcmFtZWwtY2Fr/ZS1iYWtlcnktcHJv/ZHVjdHMtbWV4aWNh/bi1zd2VldHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWFN/cmdXTGR3Vkwzc3hL/Vl9lLWw1NmZkSUVE/ekdNS3JPcXZQZWxZ/WW8wLW89" }
    ]
  },
  {
    category: "Sandwiches",
    items: [
      { name: "Turkey Sandwich", price: 550, img: "https://imgs.search.brave.com/CtWYF1SybPpD2PY4vD4xsoeFXO_MtwQYQCNihbC4DkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZS11cC1waWN0dXJl/LXZlZ2V0YXJpYW4t/c2FuZHdpY2gtdG9m/dS10b21hdG9lcy1z/YWxhZC1jdWN1bWJl/ci13aGl0ZS1wbGF0/ZS13b29kZW4tdGFi/bGUtdmVnYW4tY2Fm/ZS00NTIzNDc0OS5q/cGc" },
      { name: "Ham & Cheese", price: 500, img: "https://imgs.search.brave.com/YjKr4SK_GgkGWbUWv5LwRDrT2AKe4dtnECAlPBZHGLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzc1LzA5LzI2/LzM2MF9GXzEyNzUw/OTI2MTdfejBVS0Rh/RkNtcTVpY2tGRUhs/Q2hhT093Q0o5czky/QzEuanBn" },
      { name: "Veggie Sandwich", price: 450, img: "https://imgs.search.brave.com/PSLDwmUjt5Kwxj80XvVLCqAd-N55mPPmYtJr-qy-OWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5cmVjaXBl/cy5jb20vdGhtYi84/UHoxOXNtaVk0N3dw/cDEzd3BRTnhmZFdU/V0E9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9TaW1wbHktUmVj/aXBlcy1Mb2FkZWQt/VmVnZ2llLVNhbmR3/aWNoLU1FVEhPRC00/LTZiMTVlNGUyOWFj/NTQ0NDdiZDg1ODAw/MjYxNjM1NDc2Lmpw/Zw" },
      { name: "Club Sandwich", price: 600, img: "https://imgs.search.brave.com/Dr_OseHCYp-Pk6Tl3gQiHptwyOM5PSBXg3gOe3IjsP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MjcyNzUxNy9waG90/by9jbHViLXNhbmR3/aWNoLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz13WHM4dW5D/UzN2bTRSMWdQT29R/Tm1jUi1IS1VQNk1u/MXM0bHlCLUR5ZnZn/PQ" },
      { name: "BLT", price: 550, img: "https://imgs.search.brave.com/jYVef3hMQEEb7XYwmtcG64AQrmV5z_ag1OS6f3fPqEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL1gxb2RkU3dK/WXYzOE1UQU1lQ3lz/S1EvbC5qcGc" }
    ]
  },
  {
    category: "Breakfast",
    items: [
      { name: "Waffles", price: 400, img: "https://imgs.search.brave.com/er5QGZ6C4SgLkiWJCrNP--WBBr8Xwvf3E216gxxUPnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3VjWG11cjFZ/SHVkOTZIdlFpdnFu/cmcvbC5qcGc" },
      { name: "Fruit Platter", price: 350, img: "https://imgs.search.brave.com/VBpBsomdSaYBqBHDJa8iy1vjrq15ewUplkCw_wk5E7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDkvYjAvNmYvNjgv/YmVpcnV0LWNhZmUu/anBn" },
      { name: "Scrambled Eggs", price: 300, img: "https://imgs.search.brave.com/dvzU-UmihZM61yQQ2-qeEWtfH3YWjjgOcsjnfQPPMrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3Jp/YXZleS5jb20vaW1h/Z2VzLzIwMTkvMDgv/SU1HXzk5MDQuanBl/Zw" },
      { name: "Breakfast Sausage", price: 400, img: "https://imgs.search.brave.com/vImcYBmeOtAcyfiV0bM942LJJIITMjWDQmPupqmw6jc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/MzUxLzkwMC9zbWFs/bC9mdWxsLWVuZ2xp/c2gtYnJlYWtmYXN0/LXdpdGgtYm9pbGVk/LWVnZ3MtYmVhbnMt/c2F1c2FnZXMtdG9t/YXRvZXMtcGhvdG8u/SlBH" },
      { name: "Hash Browns", price: 250, img: "https://imgs.search.brave.com/Hhj-FETIkFClCLmF2InSI2hs7H0utiOiiw0uylGG9FA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzQ2LzI5LzQ5/LzM2MF9GXzQ2Mjk0/OTc3X1BadnRJNWk5/dkxROXJyS2FMcngy/Ymszb2luQ0JMSWVi/LmpwZw" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Cake", price: 450, img: "https://imgs.search.brave.com/330NloxITBWjDxMeBmzqd7Ja2kxYTjixO2aoYBIaFC0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzk3Lzc0LzAw/LzM2MF9GXzEyOTc3/NDAwMzlfcFYzZmhJ/akNMTjI2T3g4YW5y/TkU1WlhaM0xNTFl1/OEEuanBn" },
      { name: "Cheesecake", price: 500, img: "https://imgs.search.brave.com/_N6DJcw_qhDZMGYf9LbmdZUggz7icYOozl8L7fC47fw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9uY2FmZWl0YWxp/ZW4uZnIvbW9kdWxl/cy9yZWNldHRlcy92/aWV3cy9pbWcvaWxs/dXN0cmF0aW9uNzUu/anBn" },
      { name: "Apple Pie", price: 400, img: "https://imgs.search.brave.com/28CZOb9kPQAIIibcYFIs-l0048Gp43KXQZV3n-2sjlw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1waWUtc2xpY2Ut/d2hpdGUtcGxhdGUt/Y29mZmVlLWNhZmUt/ODc4MjY2NjMuanBn" },
      { name: "Brownies", price: 350, img: "https://imgs.search.brave.com/3Pe1t5MEJDyWGHPBcNDSYogvOG-4fi8WezOAg47b1LI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MDAwODUyNy9waG90/by9ob21lbWFkZS1j/aG9jb2xhdGUtYnJv/d25pZXMtcmVhZHkt/dG8tZWF0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IZmFx/TGFuVTBVbVlrWnN1/MmtBZUxrRTFuTlBM/ZTFjdllEa2pVbXlW/Z3NFPQ" },
      { name: "Tiramisu", price: 550, img: "https://imgs.search.brave.com/UGcqptJSled6VGUQXNUFQwxgX95O_o4-qRXT7rGq7TQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vZGVs/aWNlcy5vdWVzdC1m/cmFuY2UuZnIvaW1h/Z2VzL3JlY2V0dGVz/LzIwMTUvdGlyYW1p/c3UtMTAyNHgxMDgx/LmpwZw" }
    ]
  },
  {
    category: "Smoothies",
    items: [
      { name: "Mango Smoothie", price: 400, img: "https://imgs.search.brave.com/mqgSz-Uin7ZhGZeaccNvvpWGDjI9fXcNHTeEMRXFijM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzI2Lzg1LzU3/LzM2MF9GXzkyNjg1/NTcyOF9FbkFuODd5/SVZNYUpmYmhkMGV6/TUhPNm56Q05GQkdq/OC5qcGc" },
      { name: "Strawberry Smoothie", price: 400, img: "https://imgs.search.brave.com/oxxBXInEg1r5u9_-8uh71NEyQ08t0mgjKGD9EYV6F_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA0/NjM5OTcwL3Bob3Rv/L3N0cmF3YmVycnkt/bWlsa3NoYWtlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/NGJmYTIzQkxRamF2/ZklHTUd5LTVVbFBJ/a2xJal9aZG5hWHF5/N0JHeDhRPQ" },
      { name: "Banana Smoothie", price: 350, img: "https://imgs.search.brave.com/NKBlmFwh4igzroCH2x3h8GCMhTXJp2aG0Ykn0CfCJv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/NTI0Lzg3NS9zbWFs/bC9iYW5hbmEtbWls/ay1pbi1nbGFzcy1z/d2VldC1mcnVpdC1k/cmluay1mcmVzaC1z/bW9vdGhpZS1kZXNz/ZXJ0LWhlYWx0aHkt/Y29ja3RhaWwtYmV2/ZXJhZ2UtaG9tZW1h/ZGUtYmFuYW5hLWp1/aWNlLW5hdHVyYWwt/eW9ndXJ0LW1pbGtz/aGFrZS1waG90by5q/cGc" },
      { name: "Green Smoothie", price: 380, img: "https://imgs.search.brave.com/k5o5S5DZTaph3JjhXEIXWNla4QSLglhlrFQy_3qNKnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1w/bGVncmVlbnNtb290/aGllcy5jb20vd3At/Y29udGVudC91cGxv/YWRzL2Jlc3QtZ3Jl/ZW4tc21vb3RoaWUt/cmVjaXBlLXNpbXBs/ZS1mZWF0dXJlZC5q/cGc" },
      { name: "Berry Blast", price: 420, img: "https://imgs.search.brave.com/nCBOsh4Vl5PUU1Wj2VQ6InvvdRR6PJozEZbuFeabrko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxscmVjaXBlcy5j/b20vdGhtYi9lREJC/dmxaU3AtVVROOW9R/WWlpMkNQX0JmZ1E9/LzB4NTEyL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpLzI0/NjkzMGZyb3plbi1i/ZXJyeS1zbW9vdGhp/ZW15aG90c291dGhl/cm5tZXNzNHgzLTg1/ZDAxZjM1MTMzMjQ0/ZjM4M2M4MDE2YWY4/ZjVkMzlmLmpwZw" }
    ]
  },
  {
    category: "Specials",
    items: [
      { name: "Chef's Special Omelette", price: 750, img: "https://imgs.search.brave.com/ibWHikSw5SGWdaG3IqT2h55NTwPRTy4CC3Tz7YhqzMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGFuZHdpbmUu/Y29tL3RobWIvNWNZ/WWN6V0dadlRIUnV3/WkVaX2ZpMlpLQm5j/PS8yODJ4MTg4L2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L0hELTIwMTMwMi1y/LXJhdGF0b3VpbGxl/LXRvYXN0cy13aXRo/LWZyaWVkLWVnZ3Mt/M2I0ODQ1NWMzOTZm/NGE0MWJiYmJkYTEw/MDVhYWU1ZjkuanBn" },
      { name: "Mac & Cheese", price: 800, img: "https://imgs.search.brave.com/ByF5GvnMpBjAV2y4S8hXozYYLpW4RzWjOMmTZj3U21g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzEw/NjkvMTcwOC9maWxl/cy9yZWNpcGUtcG9y/Y2luaS10cnVmZmxl/LW1hYy5qcGc_dj0x/NjYxNDM5NDM4" },
      { name: "Lobster Roll", price: 1200, img: "https://imgs.search.brave.com/KlKUqlKkwNVGbDO-SnDB12DhGJT71Mxr5D6Opmmydr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci90ZFpN/d0NKWS1fRjk2V3Bw/U0RFVHdMVzBHZFk9/LzB4MDo0MDQ2eDI3/MDAvMTIwMHg5MDAv/ZmlsdGVyczpmb2Nh/bCgxNzAweDEwMjc6/MjM0NngxNjczKTpu/b191cHNjYWxlKCkv/Y2RuLnZveC1jZG4u/Y29tL3VwbG9hZHMv/Y2hvcnVzX2ltYWdl/L2ltYWdlLzc0MDcw/MTExL1dhcm1fQnV0/dGVyZWRfTG9ic3Rl/cl9Sb2xsLjAuanBn" },
      { name: "Beef Wellington", price: 1500, img: "https://imgs.search.brave.com/3t2CuFUnybr8RPFNkhU6v7Zj4X0Odr1S6mq4Chz99ZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzEyLzA5LzIy/LzM2MF9GXzE0MTIw/OTIyOTVfTUFVNlFK/U0VocVVkeGxsMU5Y/MWp0OG5NZHZHNmtI/MzguanBn" },
      { name: "Gourmet Burger", price: 700, img: "https://imgs.search.brave.com/-ltNVMZZRTx3LSIYzeacLyugKrxIQqe2U6Z0aqdz27U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk1/NTIwMjM0L3Bob3Rv/L2RlbGljaW91cy1o/YW1idXJnZXItb24t/d29vZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9V1ZQS2NB/QVFrZVhqOXdPMFJJ/cFozM3ZrbU53aFNa/ZlNVMDZNVUUyWmJL/Zz0" }
    ]
  }
];

export default menuItems;