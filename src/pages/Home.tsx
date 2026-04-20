import { useState } from 'react'
import shopkeeperImage from '../assets/人物.png'

// 产品数据
const products = [
  {
    id: 1,
    name: '棉花被',
    description: '天然棉花填充，柔软亲肤，保暖舒适',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cotton%20quilt%20bedding%20product%20photo%20high%20quality&image_size=square'
  },
  {
    id: 2,
    name: '大豆被',
    description: '大豆纤维填充，轻盈保暖，透气性好',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=soybean%20fiber%20quilt%20bedding%20product%20photo%20high%20quality&image_size=square'
  },
  {
    id: 3,
    name: '羽绒被',
    description: '90%白鸭绒填充，保暖性强，轻盈舒适',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=down%20quilt%20bedding%20product%20photo%20high%20quality&image_size=square'
  },
  {
    id: 4,
    name: '蚕丝被',
    description: '100%天然蚕丝填充，亲肤透气，恒温保暖',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=silk%20quilt%20bedding%20product%20photo%20high%20quality&image_size=square'
  }
]

// 价格表数据
const priceList = [
  {
    category: '桑蚕丝',
    items: [
      { size: '1斤', price: '290元' },
      { size: '2.2米*2.4米', price: '320元' }
    ]
  },
  {
    category: '羊毛被加工费(包水洗棉布料)',
    items: [
      { size: '2.2米*2.3米', price: '290元' },
      { size: '1.8米*2.2米', price: '260元' },
      { size: '1.5米*2.0米', price: '230元' }
    ]
  },
  {
    category: '棉花被加工费(包水洗棉布料)',
    items: [
      { size: '2.2米*2.4米', price: '230元' },
      { size: '2.0米*2.3米', price: '200元' },
      { size: '1.8米*2.2米', price: '180元' },
      { size: '1.5米*2.0米', price: '150元' }
    ]
  },
  {
    category: '羽绒被加工费(包内胆)',
    items: [
      { size: '2.0米*2.3米', price: '350元' },
      { size: '1.8米*2.2米', price: '330元' },
      { size: '1.5米*2.0米', price: '300元' }
    ]
  },
  {
    category: '拉舍尔双层毛毯加工费(包水洗棉布料)',
    items: [
      { size: '2.0米*2.3米 单包', price: '140元' },
      { size: '2.0米*2.3米 双包', price: '240元' },
      { size: '1.8米*2.0米 单包', price: '120元' },
      { size: '1.8米*2.0米 双包', price: '220元' },
      { size: '1.5米*2.0米 单包', price: '100元' },
      { size: '1.5米*2.0米 双包', price: '170元' }
    ]
  }
]

const Home = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const openProductModal = (product: any) => {
    setSelectedProduct(product)
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">乔家喜被</h1>
            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveTab('home')}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors ${activeTab === 'home' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                首页
              </button>
              <button 
                onClick={() => setActiveTab('products')}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors ${activeTab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                产品
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 首页内容 */}
      {activeTab === 'home' && (
        <div className="container mx-auto px-4 py-8">
          {/* 店铺介绍 */}
          <section className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">关于我们</h2>
                <p className="text-lg text-gray-700 mb-4">
                  乔家喜被专注于各类被子的加工与定制，提供棉花被、大豆被、羽绒被、蚕丝被等多种产品，支持现场定做和私人订制。
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  我们坚持使用优质原材料，传统手工工艺，为您打造温暖舒适的睡眠体验。
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:18326180320" className="bg-blue-600 text-white text-xl font-medium py-3 px-6 rounded-md text-center hover:bg-blue-700 transition-colors">
                    立即联系：183-2618-0320
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white text-xl font-medium py-3 px-6 rounded-md text-center hover:bg-green-700 transition-colors">
                    查看地图位置
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={shopkeeperImage} 
                  alt="店主照片" 
                  className="w-full h-auto rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* 店铺信息 */}
          <section className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">店铺信息</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">店铺地址</h3>
                  <p className="text-lg text-gray-700">安徽省合肥市瑶海区海洲·景秀世家1期乔家喜被</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">营业时间</h3>
                  <p className="text-lg text-gray-700">周一至周日 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">联系电话</h3>
                  <p className="text-lg text-gray-700">183-2618-0320</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">微信咨询</h3>
                  <p className="text-lg text-gray-700">微信同号：18326180320</p>
                </div>
              </div>
            </div>
          </section>

          {/* 精选产品 */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">精选产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.slice(0, 2).map((product) => (
                <div 
                  key={product.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => openProductModal(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-lg text-gray-700 mb-3">{product.description}</p>
                    <button className="mt-4 w-full bg-blue-600 text-white text-lg font-medium py-2 rounded-md hover:bg-blue-700 transition-colors">
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button 
                onClick={() => setActiveTab('products')}
                className="bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-md hover:bg-blue-700 transition-colors"
              >
                查看全部产品
              </button>
            </div>
          </section>
        </div>
      )}

      {/* 产品页内容 */}
      {activeTab === 'products' && (
        <div className="container mx-auto px-4 py-8">
          <section className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">我们的产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => openProductModal(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-lg text-gray-700 mb-3">{product.description}</p>
                    <button className="mt-4 w-full bg-blue-600 text-white text-lg font-medium py-2 rounded-md hover:bg-blue-700 transition-colors">
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 价格表 */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">价格表</h2>
            <div className="space-y-8">
              {priceList.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <h3 className="text-xl font-semibold text-white bg-blue-600 px-4 py-3">{category.category}</h3>
                  <div className="divide-y divide-gray-200">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className={`flex justify-between items-center px-4 py-4 ${itemIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                      >
                        <div className="flex-1">
                          <p className="text-lg font-medium text-gray-800">{item.size}</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-red-600">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}



      {/* 产品详情弹窗 */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
                <button 
                  onClick={closeProductModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-lg text-gray-700 mb-4">{selectedProduct.description}</p>
              <div className="flex gap-4">
                <a href="tel:18326180320" className="flex-1 bg-blue-600 text-white text-lg font-medium py-3 px-6 rounded-md text-center hover:bg-blue-700 transition-colors">
                  电话咨询
                </a>
                <button 
                  onClick={closeProductModal}
                  className="flex-1 bg-gray-200 text-gray-800 text-lg font-medium py-3 px-6 rounded-md text-center hover:bg-gray-300 transition-colors"
                >
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 底部 */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">乔家喜被</h3>
              <p className="text-gray-300">专注被子加工与定制</p>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">联系电话：183-2618-0320</p>
              <p>地址：安徽省合肥市瑶海区海洲·景秀世家1期</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© 2026 乔家喜被 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home