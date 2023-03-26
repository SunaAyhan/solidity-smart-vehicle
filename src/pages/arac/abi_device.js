
const abi_device=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "insurance_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "insurance_company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "insurance_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "insurance_start_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "insurance_end_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "insurance_amount",
				"type": "uint256"
			}
		],
		"name": "add_insurance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "part_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "service_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "add_part",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "service_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "service_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "service_description",
				"type": "string"
			}
		],
		"name": "add_service",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_device_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_device_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_device_model",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_device_color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_device_status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_chassis_number",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "new_owner",
				"type": "address"
			}
		],
		"name": "transfer_device",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "new_color",
				"type": "string"
			}
		],
		"name": "update_device_color",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "new_odometer",
				"type": "uint256"
			}
		],
		"name": "update_Device_odometer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "new_status",
				"type": "string"
			}
		],
		"name": "update_device_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_device_details",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_device_history_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_device_odometer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_device_status",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "insurance_id",
				"type": "uint256"
			}
		],
		"name": "get_insurance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_owner_address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "part_id",
				"type": "uint256"
			}
		],
		"name": "get_part_history",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "service_id",
				"type": "uint256"
			}
		],
		"name": "get_service",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "insurance_history",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "insurance_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "insurance_company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "insurance_type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "insurance_start_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "insurance_end_date",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "insurance_amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "part_history",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "part_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "service_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "service_history",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "service_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "service_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "service_description",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = abi_device;