import axios from 'axios'
import { url } from './url'

// coingecko api url
const chainName = {
  1: 'ethereum',
  56: 'binance-smart-chain',
  137: 'polygon-pos',
}

/**
 * get coingecko market info
 */
export const getCoinMarketInfo = async (name: string) => {
  const { data } = await axios.get(`${url.market}${name.toLowerCase()}`)
  return data[0]
}

/**
 * get coingecko coin info
 */
export const getCoinInfo = async (chainId: number, address: string) => {
  const { data } = await axios.get(`${url.coins}/${chainName[chainId]}/contract/${address.toLowerCase()}`)
  return data[0]
}

/**
 * get holds
 */
export const getHolders = async (name: string) => {
  const { data } = await axios.get(`${url.holders}${name.toLowerCase()}`)
  return data.data.top.addrcount
}

/**
 * get mini-chart
 */
export const getMiniChartData = async (name: string) => {
  const apiUrl = url['mini-chart'].replace('name', name.toLowerCase())
  const { data } = await axios.get(apiUrl)
  return data
}

/**
 * get chart
 */
export const getChartData = async (name: string) => {
  const apiUrl = url.chart.replace('name', name.toLowerCase())
  const { data } = await axios.get(apiUrl)
  return data
}

/**
 * get dodoapi data
 */

export const getDodoData = async (
  fromTokenAddress: string,
  fromTokenDecimals: number,
  toTokenAddress: string,
  toTokenDecimals: number,
  fromAmount: any,
  slippage: number,
  userAddr: string,
  chainId: number,
  rpc: string,
) => {
  const { data } = await axios.get(
    `${url.router}fromTokenAddress=${fromTokenAddress}&fromTokenDecimals=${fromTokenDecimals}&toTokenAddress=${toTokenAddress}&toTokenDecimals=${toTokenDecimals}&fromAmount=${fromAmount}&slippage=${slippage}&userAddr=${userAddr}&chainId=${chainId}&rpc=${rpc}`,
  )
  return data
}
