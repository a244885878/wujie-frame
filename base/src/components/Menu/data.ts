export const menuData = [
	{
		name: 'oa',
		url: 'http://localhost:6002/',
		path: '/oa',
		meta: {
			icon: 'House',
			title: 'oa办公',
		},
		children: [
			{
				path: '/oa/approve',
				meta: {
					title: '审批',
				},
			},
			{
				path: '/oa/flow',
				meta: {
					title: '流程',
				},
			},
		],
	},
	{
		name: 'sales',
		url: 'http://localhost:6003/',
		path: '/sales',
		meta: {
			icon: 'Position',
			title: '销售',
		},
		children: [
			{
				path: '/sales/order',
				meta: {
					title: '订单',
				},
			},
			{
				path: '/sales/client',
				meta: {
					title: '客户',
				},
			},
		],
	},
]