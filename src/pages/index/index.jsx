import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

const list = new Array(10).fill(0)
export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  return (
    <View className='index'>
      <View className='nav' id='nav'>{list.map((_, i) =>  <View onClick={()=>{
        console.log(`Scroll to item${i}`)
        Taro.pageScrollTo({
          selector: `#item${i}`,
          duration: 170,
          offsetTop: - document.querySelector(`#nav`).clientHeight
        })
      }} key={i} id={`nav-item${i}`} className='nav-item'></View> )}</View>
      <View className='list'>
        {list.map((_, i) =>  <View key={i} id={`item${i}`} className='item'></View> )}
      </View>
    </View>
  )
}
