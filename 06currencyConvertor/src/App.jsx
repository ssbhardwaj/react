import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://in.images.search.yahoo.com/images/view;_ylt=AwrPoZMAPqZlOgQrVze9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzIzNjMxMDIwNzY3N2I2YjRhZTFlZmIxZWE0YTQ2ZWQxBGdwb3MDOTAEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimages%2Blord%2Bshiva%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D90&w=1796&h=1280&imgurl=wallpapercave.com%2Fwp%2Fwp6808310.jpg&rurl=https%3A%2F%2Fwallpapercave.com%2Fshivaling-wallpapers&size=169.0KB&p=images+lord+shiva&oid=236310207677b6b4ae1efb1ea4a46ed1&fr2=piv-web&fr=mcafee&tt=Shivaling+Wallpapers+-+Wallpaper+Cave&b=61&ni=21&no=90&ts=&tab=organic&sigr=YS2WX3jPH.ne&sigb=7pTJONSl.HKV&sigi=6RstDBpBvsl.&sigt=SMGmX63prV_O&.crumb=sufwkRbd9DJ&fr=mcafee&fr2=piv-web&type=E210IN885G0')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
