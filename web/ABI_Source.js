abi_source = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "add",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			}
		],
		"name": "ADD",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "less",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			}
		],
		"name": "LESS",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "n",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "n",
				"type": "uint256"
			}
		],
		"name": "less",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "view_result_string",
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
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "view_result_uint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]




abiv5_old = [
    {
	"constant": true,
	"inputs": [],
	"name": "read_acheteur",
	"outputs": [
	    {
		"name": "nom_societe",
		"type": "string"
	    },
	    {
		"name": "forme_juridique",
		"type": "string"
	    },
	    {
		"name": "capital",
		"type": "uint256"
	    },
	    {
		"name": "registre_commerce",
		"type": "string"
	    },
	    {
		"name": "siret",
		"type": "string"
	    },
	    {
		"name": "adresse_siege",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "payer",
	"outputs": [],
	"payable": true,
	"stateMutability": "payable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Materiel_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "read_vendeur",
	"outputs": [
	    {
		"name": "nom_societe",
		"type": "string"
	    },
	    {
		"name": "forme_juridique",
		"type": "string"
	    },
	    {
		"name": "capital",
		"type": "uint256"
	    },
	    {
		"name": "registre_commerce",
		"type": "string"
	    },
	    {
		"name": "siret",
		"type": "string"
	    },
	    {
		"name": "adresse_siege",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "read_vendeur_representant",
	"outputs": [
	    {
		"name": "representant_nom",
		"type": "string"
	    },
	    {
		"name": "representant_prenom",
		"type": "string"
	    },
	    {
		"name": "representant_titre",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Contract_valide",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Paiement_OK",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "signature",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Litige_signature_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "partie_est",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Garanties_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "inf",
		"type": "string"
	    }
	],
	"name": "updateinfo",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Etat_bien_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Prix_eth",
	"outputs": [
	    {
		"name": "",
		"type": "uint256"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "read_acheteur_representant",
	"outputs": [
	    {
		"name": "representant_nom",
		"type": "string"
	    },
	    {
		"name": "representant_prenom",
		"type": "string"
	    },
	    {
		"name": "representant_titre",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Livraison_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "Vente_lire",
	"outputs": [
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    },
	    {
		"name": "",
		"type": "string"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"inputs": [
	    {
		"name": "adresse_acheteur",
		"type": "address"
	    },
	    {
		"name": "adresse_vendeur",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
    }
]
