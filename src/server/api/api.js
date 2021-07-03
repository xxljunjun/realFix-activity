import request from '../request';


// 请求天气
export function getWeather(params) {
	return request({
		url: `/he/freeweather?city=${params.city}&appkey=${params.appkey}`,
		method: 'get',
	})
}


export function getDataList(params) {
	return request({
		url: '/device/detail',
		method: 'get',
		header: {
			/*'Accept-Language': 'zh-CN',*/
			'Content-Type': 'application/json',
		},
		params,
	})
}
export function updateDevice(params) {
	return request({
		url: '/device',
		method: 'put',
		params,
	})
}
export function uploadDevice(params) {
	return request({
		url: '/device/upload',
		method: 'post',
		params,
	})
}