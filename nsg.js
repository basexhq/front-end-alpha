nsg = {
  "contractName": "NetworkStateGenesis",
  "abi": [
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "organisations",
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
      "inputs": [],
      "name": "organisationsLength",
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
          "name": "name",
          "type": "string"
        }
      ],
      "name": "addOrganisation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"addOrganisation\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"organisations\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"organisationsLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/NetworkStateGenesis.sol\":\"NetworkStateGenesis\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/NetworkStateGenesis.sol\":{\"keccak256\":\"0xa0ac7e4826cf9b1fc373461381b69299795da06d388f716c658fbbaa048c5191\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df61a53a7e5472fceecd42c795fc52f5ae07dbb2127810612064950b04d051ff\",\"dweb:/ipfs/QmbACBZRyKVCJEFY5Ut73JN9ECXwzZiKJpsHHhp5LGzSJw\"]},\"project:/node_modules/@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981\",\"dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51\"]},\"project:/node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6109ff8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063246f8c44146100675780634c71de3b14610097578063715018a6146100b55780638da5cb5b146100bf578063988760c1146100dd578063f2fde38b146100f9575b600080fd5b610081600480360381019061007c9190610579565b610115565b60405161008e919061063f565b60405180910390f35b61009f6101c1565b6040516100ac9190610670565b60405180910390f35b6100bd6101c7565b005b6100c761024f565b6040516100d491906106cc565b60405180910390f35b6100f760048036038101906100f2919061074c565b610278565b005b610113600480360381019061010e91906107c5565b6102d2565b005b6001818154811061012557600080fd5b90600052602060002001600091509050805461014090610821565b80601f016020809104026020016040519081016040528092919081815260200182805461016c90610821565b80156101b95780601f1061018e576101008083540402835291602001916101b9565b820191906000526020600020905b81548152906001019060200180831161019c57829003601f168201915b505050505081565b60025481565b6101cf6103ca565b73ffffffffffffffffffffffffffffffffffffffff166101ed61024f565b73ffffffffffffffffffffffffffffffffffffffff1614610243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023a9061089f565b60405180910390fd5b61024d60006103d2565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60018282909180600181540180825580915050600190039060005260206000200160009091929091929091929091925091906102b5929190610496565b50600260008154809291906102c9906108ee565b91905055505050565b6102da6103ca565b73ffffffffffffffffffffffffffffffffffffffff166102f861024f565b73ffffffffffffffffffffffffffffffffffffffff161461034e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103459061089f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b5906109a9565b60405180910390fd5b6103c7816103d2565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546104a290610821565b90600052602060002090601f0160209004810192826104c4576000855561050b565b82601f106104dd57803560ff191683800117855561050b565b8280016001018555821561050b579182015b8281111561050a5782358255916020019190600101906104ef565b5b509050610518919061051c565b5090565b5b8082111561053557600081600090555060010161051d565b5090565b600080fd5b600080fd5b6000819050919050565b61055681610543565b811461056157600080fd5b50565b6000813590506105738161054d565b92915050565b60006020828403121561058f5761058e610539565b5b600061059d84828501610564565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105e05780820151818401526020810190506105c5565b838111156105ef576000848401525b50505050565b6000601f19601f8301169050919050565b6000610611826105a6565b61061b81856105b1565b935061062b8185602086016105c2565b610634816105f5565b840191505092915050565b600060208201905081810360008301526106598184610606565b905092915050565b61066a81610543565b82525050565b60006020820190506106856000830184610661565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b68261068b565b9050919050565b6106c6816106ab565b82525050565b60006020820190506106e160008301846106bd565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261070c5761070b6106e7565b5b8235905067ffffffffffffffff811115610729576107286106ec565b5b602083019150836001820283011115610745576107446106f1565b5b9250929050565b6000806020838503121561076357610762610539565b5b600083013567ffffffffffffffff8111156107815761078061053e565b5b61078d858286016106f6565b92509250509250929050565b6107a2816106ab565b81146107ad57600080fd5b50565b6000813590506107bf81610799565b92915050565b6000602082840312156107db576107da610539565b5b60006107e9848285016107b0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061083957607f821691505b6020821081141561084d5761084c6107f2565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006108896020836105b1565b915061089482610853565b602082019050919050565b600060208201905081810360008301526108b88161087c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108f982610543565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561092c5761092b6108bf565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006109936026836105b1565b915061099e82610937565b604082019050919050565b600060208201905081810360008301526109c281610986565b905091905056fea2646970667358221220375e65167641614d347db4f910c1978256bfe5383b71466a739614f642d27bcd64736f6c634300080b0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c8063246f8c44146100675780634c71de3b14610097578063715018a6146100b55780638da5cb5b146100bf578063988760c1146100dd578063f2fde38b146100f9575b600080fd5b610081600480360381019061007c9190610579565b610115565b60405161008e919061063f565b60405180910390f35b61009f6101c1565b6040516100ac9190610670565b60405180910390f35b6100bd6101c7565b005b6100c761024f565b6040516100d491906106cc565b60405180910390f35b6100f760048036038101906100f2919061074c565b610278565b005b610113600480360381019061010e91906107c5565b6102d2565b005b6001818154811061012557600080fd5b90600052602060002001600091509050805461014090610821565b80601f016020809104026020016040519081016040528092919081815260200182805461016c90610821565b80156101b95780601f1061018e576101008083540402835291602001916101b9565b820191906000526020600020905b81548152906001019060200180831161019c57829003601f168201915b505050505081565b60025481565b6101cf6103ca565b73ffffffffffffffffffffffffffffffffffffffff166101ed61024f565b73ffffffffffffffffffffffffffffffffffffffff1614610243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023a9061089f565b60405180910390fd5b61024d60006103d2565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60018282909180600181540180825580915050600190039060005260206000200160009091929091929091929091925091906102b5929190610496565b50600260008154809291906102c9906108ee565b91905055505050565b6102da6103ca565b73ffffffffffffffffffffffffffffffffffffffff166102f861024f565b73ffffffffffffffffffffffffffffffffffffffff161461034e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103459061089f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b5906109a9565b60405180910390fd5b6103c7816103d2565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546104a290610821565b90600052602060002090601f0160209004810192826104c4576000855561050b565b82601f106104dd57803560ff191683800117855561050b565b8280016001018555821561050b579182015b8281111561050a5782358255916020019190600101906104ef565b5b509050610518919061051c565b5090565b5b8082111561053557600081600090555060010161051d565b5090565b600080fd5b600080fd5b6000819050919050565b61055681610543565b811461056157600080fd5b50565b6000813590506105738161054d565b92915050565b60006020828403121561058f5761058e610539565b5b600061059d84828501610564565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105e05780820151818401526020810190506105c5565b838111156105ef576000848401525b50505050565b6000601f19601f8301169050919050565b6000610611826105a6565b61061b81856105b1565b935061062b8185602086016105c2565b610634816105f5565b840191505092915050565b600060208201905081810360008301526106598184610606565b905092915050565b61066a81610543565b82525050565b60006020820190506106856000830184610661565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106b68261068b565b9050919050565b6106c6816106ab565b82525050565b60006020820190506106e160008301846106bd565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261070c5761070b6106e7565b5b8235905067ffffffffffffffff811115610729576107286106ec565b5b602083019150836001820283011115610745576107446106f1565b5b9250929050565b6000806020838503121561076357610762610539565b5b600083013567ffffffffffffffff8111156107815761078061053e565b5b61078d858286016106f6565b92509250509250929050565b6107a2816106ab565b81146107ad57600080fd5b50565b6000813590506107bf81610799565b92915050565b6000602082840312156107db576107da610539565b5b60006107e9848285016107b0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061083957607f821691505b6020821081141561084d5761084c6107f2565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006108896020836105b1565b915061089482610853565b602082019050919050565b600060208201905081810360008301526108b88161087c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108f982610543565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561092c5761092b6108bf565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006109936026836105b1565b915061099e82610937565b604082019050919050565b600060208201905081810360008301526109c281610986565b905091905056fea2646970667358221220375e65167641614d347db4f910c1978256bfe5383b71466a739614f642d27bcd64736f6c634300080b0033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:8385:6",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:6",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:6",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:6"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:6"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:6",
                "type": ""
              }
            ],
            "src": "7:75:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:6",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:6"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:6",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:6"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:32:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:16:6",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "400:5:6"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:6"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:6",
                "type": ""
              }
            ],
            "src": "334:77:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "460:79:6",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "517:16:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "526:1:6",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "519:6:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "519:12:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "519:12:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "483:5:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "508:5:6"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "490:17:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "490:24:6"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "480:2:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "480:35:6"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "473:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "473:43:6"
                  },
                  "nodeType": "YulIf",
                  "src": "470:63:6"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "453:5:6",
                "type": ""
              }
            ],
            "src": "417:122:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "597:87:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "607:29:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "629:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "616:12:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "616:20:6"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "607:5:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "672:5:6"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "645:26:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "645:33:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "645:33:6"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "575:6:6",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "583:3:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "591:5:6",
                "type": ""
              }
            ],
            "src": "545:139:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "756:263:6",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "802:83:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "804:77:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "804:79:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "804:79:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "777:7:6"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "786:9:6"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "773:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "773:23:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "798:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "769:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "769:32:6"
                  },
                  "nodeType": "YulIf",
                  "src": "766:119:6"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "895:117:6",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "910:15:6",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "924:1:6",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "914:6:6",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "939:63:6",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "974:9:6"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "985:6:6"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "970:3:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "970:22:6"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "994:7:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "949:20:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "949:53:6"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "939:6:6"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "726:9:6",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "737:7:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "749:6:6",
                "type": ""
              }
            ],
            "src": "690:329:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1084:40:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1095:22:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1111:5:6"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1105:5:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1105:12:6"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1095:6:6"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1067:5:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1077:6:6",
                "type": ""
              }
            ],
            "src": "1025:99:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1226:73:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1243:3:6"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1248:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1236:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1236:19:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1236:19:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1264:29:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1283:3:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1288:4:6",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1279:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1279:14:6"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1264:11:6"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1198:3:6",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1203:6:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1214:11:6",
                "type": ""
              }
            ],
            "src": "1130:169:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1354:258:6",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1364:10:6",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1373:1:6",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "1368:1:6",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1433:63:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1458:3:6"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "1463:1:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1454:3:6"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1454:11:6"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "1477:3:6"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "1482:1:6"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1473:3:6"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1473:11:6"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "1467:5:6"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1467:18:6"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1447:6:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1447:39:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1447:39:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1394:1:6"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1397:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "1391:2:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1391:13:6"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1405:19:6",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1407:15:6",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1416:1:6"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1419:2:6",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1412:3:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1412:10:6"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1407:1:6"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "1387:3:6",
                    "statements": []
                  },
                  "src": "1383:113:6"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1530:76:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1580:3:6"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "1585:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1576:3:6"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1576:16:6"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1594:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1569:6:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1569:27:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1569:27:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1511:1:6"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1514:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1508:2:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1508:13:6"
                  },
                  "nodeType": "YulIf",
                  "src": "1505:101:6"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1336:3:6",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "1341:3:6",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1346:6:6",
                "type": ""
              }
            ],
            "src": "1305:307:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1666:54:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1676:38:6",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1694:5:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1701:2:6",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1690:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1690:14:6"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1710:2:6",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "1706:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1706:7:6"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1686:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1686:28:6"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1676:6:6"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1649:5:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "1659:6:6",
                "type": ""
              }
            ],
            "src": "1618:102:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1818:272:6",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1828:53:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1875:5:6"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "1842:32:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1842:39:6"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1832:6:6",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1890:78:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1956:3:6"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1961:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1897:58:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1897:71:6"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "1890:3:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2003:5:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2010:4:6",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1999:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1999:16:6"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2017:3:6"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2022:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "1977:21:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1977:52:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1977:52:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2038:46:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2049:3:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2076:6:6"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "2054:21:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2054:29:6"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2045:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2045:39:6"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2038:3:6"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1799:5:6",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1806:3:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1814:3:6",
                "type": ""
              }
            ],
            "src": "1726:364:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2214:195:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2224:26:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2236:9:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2247:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2232:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2232:18:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2224:4:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2271:9:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2282:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2267:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2267:17:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2290:4:6"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2296:9:6"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2286:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2286:20:6"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2260:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2260:47:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2260:47:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2316:86:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2388:6:6"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2397:4:6"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2324:63:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2324:78:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2316:4:6"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2186:9:6",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2198:6:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2209:4:6",
                "type": ""
              }
            ],
            "src": "2096:313:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2480:53:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2497:3:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2520:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "2502:17:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2502:24:6"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2490:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2490:37:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2490:37:6"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2468:5:6",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2475:3:6",
                "type": ""
              }
            ],
            "src": "2415:118:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2637:124:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2647:26:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2659:9:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2670:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2655:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2655:18:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2647:4:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2727:6:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2740:9:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2751:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2736:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2736:17:6"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2683:43:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2683:71:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2683:71:6"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2609:9:6",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2621:6:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2632:4:6",
                "type": ""
              }
            ],
            "src": "2539:222:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2812:81:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2822:65:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2837:5:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2844:42:6",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2833:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2833:54:6"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2822:7:6"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2794:5:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2804:7:6",
                "type": ""
              }
            ],
            "src": "2767:126:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2944:51:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2954:35:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2983:5:6"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "2965:17:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2965:24:6"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2954:7:6"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2926:5:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2936:7:6",
                "type": ""
              }
            ],
            "src": "2899:96:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3066:53:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3083:3:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3106:5:6"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3088:17:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3088:24:6"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3076:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3076:37:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3076:37:6"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3054:5:6",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3061:3:6",
                "type": ""
              }
            ],
            "src": "3001:118:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3223:124:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3233:26:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3245:9:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3256:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3241:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3241:18:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3233:4:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3313:6:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3326:9:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3337:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3322:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3322:17:6"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3269:43:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3269:71:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3269:71:6"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3195:9:6",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3207:6:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3218:4:6",
                "type": ""
              }
            ],
            "src": "3125:222:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3442:28:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3459:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3462:1:6",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3452:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3452:12:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3452:12:6"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "3353:117:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3565:28:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3582:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3585:1:6",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3575:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3575:12:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3575:12:6"
                }
              ]
            },
            "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
            "nodeType": "YulFunctionDefinition",
            "src": "3476:117:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3688:28:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3705:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3708:1:6",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3698:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3698:12:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3698:12:6"
                }
              ]
            },
            "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
            "nodeType": "YulFunctionDefinition",
            "src": "3599:117:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3811:478:6",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3860:83:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "3862:77:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3862:79:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3862:79:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3839:6:6"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3847:4:6",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3835:3:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3835:17:6"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3854:3:6"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "3831:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3831:27:6"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3824:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3824:35:6"
                  },
                  "nodeType": "YulIf",
                  "src": "3821:122:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3952:30:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3975:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3962:12:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3962:20:6"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "3952:6:6"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4025:83:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
                            "nodeType": "YulIdentifier",
                            "src": "4027:77:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4027:79:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4027:79:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3997:6:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4005:18:6",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3994:2:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3994:30:6"
                  },
                  "nodeType": "YulIf",
                  "src": "3991:117:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4117:29:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4133:6:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4141:4:6",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4129:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4129:17:6"
                  },
                  "variableNames": [
                    {
                      "name": "arrayPos",
                      "nodeType": "YulIdentifier",
                      "src": "4117:8:6"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4200:83:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                            "nodeType": "YulIdentifier",
                            "src": "4202:77:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4202:79:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4202:79:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "arrayPos",
                            "nodeType": "YulIdentifier",
                            "src": "4165:8:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "4179:6:6"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4187:4:6",
                                "type": "",
                                "value": "0x01"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "4175:3:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4175:17:6"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4161:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4161:32:6"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "4195:3:6"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4158:2:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4158:41:6"
                  },
                  "nodeType": "YulIf",
                  "src": "4155:128:6"
                }
              ]
            },
            "name": "abi_decode_t_string_calldata_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3778:6:6",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3786:3:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "arrayPos",
                "nodeType": "YulTypedName",
                "src": "3794:8:6",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "3804:6:6",
                "type": ""
              }
            ],
            "src": "3736:553:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4381:443:6",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4427:83:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4429:77:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4429:79:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4429:79:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4402:7:6"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4411:9:6"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4398:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4398:23:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4423:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4394:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4394:32:6"
                  },
                  "nodeType": "YulIf",
                  "src": "4391:119:6"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4520:297:6",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4535:45:6",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4566:9:6"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4577:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4562:3:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4562:17:6"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "4549:12:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4549:31:6"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4539:6:6",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4627:83:6",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "4629:77:6"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4629:79:6"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4629:79:6"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4599:6:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4607:18:6",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "4596:2:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4596:30:6"
                      },
                      "nodeType": "YulIf",
                      "src": "4593:117:6"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4724:83:6",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4779:9:6"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4790:6:6"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4775:3:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4775:22:6"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4799:7:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_calldata_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "4742:32:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4742:65:6"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4724:6:6"
                        },
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4732:6:6"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_calldata_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4343:9:6",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4354:7:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4366:6:6",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4374:6:6",
                "type": ""
              }
            ],
            "src": "4295:529:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4873:79:6",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4930:16:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4939:1:6",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4942:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4932:6:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4932:12:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4932:12:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4896:5:6"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4921:5:6"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "4903:17:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4903:24:6"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "4893:2:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4893:35:6"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4886:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4886:43:6"
                  },
                  "nodeType": "YulIf",
                  "src": "4883:63:6"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4866:5:6",
                "type": ""
              }
            ],
            "src": "4830:122:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5010:87:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5020:29:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "5042:6:6"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5029:12:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5029:20:6"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "5020:5:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5085:5:6"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "5058:26:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5058:33:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5058:33:6"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4988:6:6",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4996:3:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5004:5:6",
                "type": ""
              }
            ],
            "src": "4958:139:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5169:263:6",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5215:83:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5217:77:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5217:79:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5217:79:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5190:7:6"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5199:9:6"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5186:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5186:23:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5211:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5182:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5182:32:6"
                  },
                  "nodeType": "YulIf",
                  "src": "5179:119:6"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5308:117:6",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5323:15:6",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5337:1:6",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5327:6:6",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5352:63:6",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5387:9:6"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5398:6:6"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5383:3:6"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5383:22:6"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5407:7:6"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5362:20:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5362:53:6"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5352:6:6"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5139:9:6",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5150:7:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5162:6:6",
                "type": ""
              }
            ],
            "src": "5103:329:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5466:152:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5483:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5486:77:6",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5476:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5476:88:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5476:88:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5580:1:6",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5583:4:6",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5573:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5573:15:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5573:15:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5604:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5607:4:6",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "5597:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5597:15:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5597:15:6"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "5438:180:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5675:269:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5685:22:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "5699:4:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5705:1:6",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "5695:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5695:12:6"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "5685:6:6"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5716:38:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "5746:4:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5752:1:6",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "5742:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5742:12:6"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "5720:18:6",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5793:51:6",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5807:27:6",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "5821:6:6"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5829:4:6",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5817:3:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5817:17:6"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5807:6:6"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "5773:18:6"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5766:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5766:26:6"
                  },
                  "nodeType": "YulIf",
                  "src": "5763:81:6"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5896:42:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "5910:16:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5910:18:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5910:18:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "5860:18:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5883:6:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5891:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "5880:2:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5880:14:6"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "5857:2:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5857:38:6"
                  },
                  "nodeType": "YulIf",
                  "src": "5854:84:6"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "5659:4:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "5668:6:6",
                "type": ""
              }
            ],
            "src": "5624:320:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6056:76:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "6078:6:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6086:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6074:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6074:14:6"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6090:34:6",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6067:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6067:58:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6067:58:6"
                }
              ]
            },
            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "6048:6:6",
                "type": ""
              }
            ],
            "src": "5950:182:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6284:220:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6294:74:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6360:3:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6365:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6301:58:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6301:67:6"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "6294:3:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6466:3:6"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      "nodeType": "YulIdentifier",
                      "src": "6377:88:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6377:93:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6377:93:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6479:19:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6490:3:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6495:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6486:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6486:12:6"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "6479:3:6"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6272:3:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6280:3:6",
                "type": ""
              }
            ],
            "src": "6138:366:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6681:248:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6691:26:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6703:9:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6714:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6699:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6699:18:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6691:4:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6738:9:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6749:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6734:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6734:17:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6757:4:6"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6763:9:6"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6753:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6753:20:6"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6727:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6727:47:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6727:47:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6783:139:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6917:4:6"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6791:124:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6791:131:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6783:4:6"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6661:9:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6676:4:6",
                "type": ""
              }
            ],
            "src": "6510:419:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6963:152:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6980:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6983:77:6",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6973:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6973:88:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6973:88:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7077:1:6",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7080:4:6",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7070:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7070:15:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7070:15:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7101:1:6",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7104:4:6",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7094:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7094:15:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7094:15:6"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "6935:180:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7164:190:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7174:33:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7201:5:6"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "7183:17:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7183:24:6"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "7174:5:6"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7297:22:6",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "7299:16:6"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7299:18:6"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7299:18:6"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7222:5:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7229:66:6",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "7219:2:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7219:77:6"
                  },
                  "nodeType": "YulIf",
                  "src": "7216:103:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7328:20:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "7339:5:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7346:1:6",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7335:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7335:13:6"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "7328:3:6"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "7150:5:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "7160:3:6",
                "type": ""
              }
            ],
            "src": "7121:233:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7466:119:6",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7488:6:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7496:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7484:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7484:14:6"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7500:34:6",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7477:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7477:58:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7477:58:6"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7556:6:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7564:2:6",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7552:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7552:15:6"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7569:8:6",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7545:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7545:33:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7545:33:6"
                }
              ]
            },
            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7458:6:6",
                "type": ""
              }
            ],
            "src": "7360:225:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7737:220:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7747:74:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7813:3:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7818:2:6",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "7754:58:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7754:67:6"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7747:3:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7919:3:6"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      "nodeType": "YulIdentifier",
                      "src": "7830:88:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7830:93:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7830:93:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7932:19:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "7943:3:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7948:2:6",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7939:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7939:12:6"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "7932:3:6"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "7725:3:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "7733:3:6",
                "type": ""
              }
            ],
            "src": "7591:366:6"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8134:248:6",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8144:26:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8156:9:6"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8167:2:6",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8152:3:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8152:18:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8144:4:6"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8191:9:6"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8202:1:6",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8187:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8187:17:6"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8210:4:6"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8216:9:6"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8206:3:6"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8206:20:6"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8180:6:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8180:47:6"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8180:47:6"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8236:139:6",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8370:4:6"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "8244:124:6"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8244:131:6"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8236:4:6"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8114:9:6",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8129:4:6",
                "type": ""
              }
            ],
            "src": "7963:419:6"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() {\n        revert(0, 0)\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    // string\n    function abi_decode_t_string_calldata_ptr(offset, end) -> arrayPos, length {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        length := calldataload(offset)\n        if gt(length, 0xffffffffffffffff) { revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() }\n        arrayPos := add(offset, 0x20)\n        if gt(add(arrayPos, mul(length, 0x01)), end) { revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() }\n    }\n\n    function abi_decode_tuple_t_string_calldata_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0, value1 := abi_decode_t_string_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
      "id": 6,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "357:6258:1:-:0;;;1655:411;;;;;;;;;;921:32:4;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;357:6258:1;;640:96:5;693:7;719:10;712:17;;640:96;:::o;2270:187:4:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;357:6258:1:-;;;;;;;",
  "deployedSourceMap": "357:6258:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2073:29;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2108:31;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1668:101:4;;;:::i;:::-;;1036:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2146:126:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1918:198:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2073:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2108:31::-;;;;:::o;1668:101:4:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1732:30:::1;1759:1;1732:18;:30::i;:::-;1668:101::o:0;1036:85::-;1082:7;1108:6;;;;;;;;;;;1101:13;;1036:85;:::o;2146:126:1:-;2210:13;2229:4;;2210:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2244:19;;:21;;;;;;;;;:::i;:::-;;;;;;2146:126;;:::o;1918:198:4:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;2026:1:::1;2006:22;;:8;:22;;;;1998:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2081:28;2100:8;2081:18;:28::i;:::-;1918:198:::0;:::o;640:96:5:-;693:7;719:10;712:17;;640:96;:::o;2270:187:4:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;88:117:6:-;197:1;194;187:12;211:117;320:1;317;310:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:99::-;1077:6;1111:5;1105:12;1095:22;;1025:99;;;:::o;1130:169::-;1214:11;1248:6;1243:3;1236:19;1288:4;1283:3;1279:14;1264:29;;1130:169;;;;:::o;1305:307::-;1373:1;1383:113;1397:6;1394:1;1391:13;1383:113;;;1482:1;1477:3;1473:11;1467:18;1463:1;1458:3;1454:11;1447:39;1419:2;1416:1;1412:10;1407:15;;1383:113;;;1514:6;1511:1;1508:13;1505:101;;;1594:1;1585:6;1580:3;1576:16;1569:27;1505:101;1354:258;1305:307;;;:::o;1618:102::-;1659:6;1710:2;1706:7;1701:2;1694:5;1690:14;1686:28;1676:38;;1618:102;;;:::o;1726:364::-;1814:3;1842:39;1875:5;1842:39;:::i;:::-;1897:71;1961:6;1956:3;1897:71;:::i;:::-;1890:78;;1977:52;2022:6;2017:3;2010:4;2003:5;1999:16;1977:52;:::i;:::-;2054:29;2076:6;2054:29;:::i;:::-;2049:3;2045:39;2038:46;;1818:272;1726:364;;;;:::o;2096:313::-;2209:4;2247:2;2236:9;2232:18;2224:26;;2296:9;2290:4;2286:20;2282:1;2271:9;2267:17;2260:47;2324:78;2397:4;2388:6;2324:78;:::i;:::-;2316:86;;2096:313;;;;:::o;2415:118::-;2502:24;2520:5;2502:24;:::i;:::-;2497:3;2490:37;2415:118;;:::o;2539:222::-;2632:4;2670:2;2659:9;2655:18;2647:26;;2683:71;2751:1;2740:9;2736:17;2727:6;2683:71;:::i;:::-;2539:222;;;;:::o;2767:126::-;2804:7;2844:42;2837:5;2833:54;2822:65;;2767:126;;;:::o;2899:96::-;2936:7;2965:24;2983:5;2965:24;:::i;:::-;2954:35;;2899:96;;;:::o;3001:118::-;3088:24;3106:5;3088:24;:::i;:::-;3083:3;3076:37;3001:118;;:::o;3125:222::-;3218:4;3256:2;3245:9;3241:18;3233:26;;3269:71;3337:1;3326:9;3322:17;3313:6;3269:71;:::i;:::-;3125:222;;;;:::o;3353:117::-;3462:1;3459;3452:12;3476:117;3585:1;3582;3575:12;3599:117;3708:1;3705;3698:12;3736:553;3794:8;3804:6;3854:3;3847:4;3839:6;3835:17;3831:27;3821:122;;3862:79;;:::i;:::-;3821:122;3975:6;3962:20;3952:30;;4005:18;3997:6;3994:30;3991:117;;;4027:79;;:::i;:::-;3991:117;4141:4;4133:6;4129:17;4117:29;;4195:3;4187:4;4179:6;4175:17;4165:8;4161:32;4158:41;4155:128;;;4202:79;;:::i;:::-;4155:128;3736:553;;;;;:::o;4295:529::-;4366:6;4374;4423:2;4411:9;4402:7;4398:23;4394:32;4391:119;;;4429:79;;:::i;:::-;4391:119;4577:1;4566:9;4562:17;4549:31;4607:18;4599:6;4596:30;4593:117;;;4629:79;;:::i;:::-;4593:117;4742:65;4799:7;4790:6;4779:9;4775:22;4742:65;:::i;:::-;4724:83;;;;4520:297;4295:529;;;;;:::o;4830:122::-;4903:24;4921:5;4903:24;:::i;:::-;4896:5;4893:35;4883:63;;4942:1;4939;4932:12;4883:63;4830:122;:::o;4958:139::-;5004:5;5042:6;5029:20;5020:29;;5058:33;5085:5;5058:33;:::i;:::-;4958:139;;;;:::o;5103:329::-;5162:6;5211:2;5199:9;5190:7;5186:23;5182:32;5179:119;;;5217:79;;:::i;:::-;5179:119;5337:1;5362:53;5407:7;5398:6;5387:9;5383:22;5362:53;:::i;:::-;5352:63;;5308:117;5103:329;;;;:::o;5438:180::-;5486:77;5483:1;5476:88;5583:4;5580:1;5573:15;5607:4;5604:1;5597:15;5624:320;5668:6;5705:1;5699:4;5695:12;5685:22;;5752:1;5746:4;5742:12;5773:18;5763:81;;5829:4;5821:6;5817:17;5807:27;;5763:81;5891:2;5883:6;5880:14;5860:18;5857:38;5854:84;;;5910:18;;:::i;:::-;5854:84;5675:269;5624:320;;;:::o;5950:182::-;6090:34;6086:1;6078:6;6074:14;6067:58;5950:182;:::o;6138:366::-;6280:3;6301:67;6365:2;6360:3;6301:67;:::i;:::-;6294:74;;6377:93;6466:3;6377:93;:::i;:::-;6495:2;6490:3;6486:12;6479:19;;6138:366;;;:::o;6510:419::-;6676:4;6714:2;6703:9;6699:18;6691:26;;6763:9;6757:4;6753:20;6749:1;6738:9;6734:17;6727:47;6791:131;6917:4;6791:131;:::i;:::-;6783:139;;6510:419;;;:::o;6935:180::-;6983:77;6980:1;6973:88;7080:4;7077:1;7070:15;7104:4;7101:1;7094:15;7121:233;7160:3;7183:24;7201:5;7183:24;:::i;:::-;7174:33;;7229:66;7222:5;7219:77;7216:103;;;7299:18;;:::i;:::-;7216:103;7346:1;7339:5;7335:13;7328:20;;7121:233;;;:::o;7360:225::-;7500:34;7496:1;7488:6;7484:14;7477:58;7569:8;7564:2;7556:6;7552:15;7545:33;7360:225;:::o;7591:366::-;7733:3;7754:67;7818:2;7813:3;7754:67;:::i;:::-;7747:74;;7830:93;7919:3;7830:93;:::i;:::-;7948:2;7943:3;7939:12;7932:19;;7591:366;;;:::o;7963:419::-;8129:4;8167:2;8156:9;8152:18;8144:26;;8216:9;8210:4;8206:20;8202:1;8191:9;8187:17;8180:47;8244:131;8370:4;8244:131;:::i;:::-;8236:139;;7963:419;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity 0.8.11;\nimport \"../node_modules/@openzeppelin/contracts/access/Ownable.sol\";\n// import \"../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\";\n// import \"../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol\";\n// import \"../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol\";\n\ncontract NetworkStateGenesis is Ownable {\n    // string public GENESIS; // Preserving consciousness of the moment\n    // string public _tokenURI;\n    // uint256 public currentPrice = 7 * (10 ** 16); // Starting price is 0.07 ETH\n   \t// uint256 public currentSerialNumber = 128; // Numbers 0-127 are reserved for Elon, Pope, Obama, Putin, Lady Gaga, Zuck, Bezos, Draper, Diamandis, Jack, Sergey, Larry, Schmidt, Dalai Lama, Buffet, Vitalik... (you get the idea)\n    // uint256 public cutoffTimestamp;  // Initially all have the same price. Later on (1625443200 ---> 2021-07-05T00:00:00.000Z) the 0.1% increase kicks in\n  \t// uint256 public multiplier = 1001; \n  \t// uint256 public divisor = 1000; // Doing math in ETH. Multiply by 1001. Divide by 1000. Effectively 0.1% increase with each purchase\n  \t// event Purchase(address indexed addr, uint256 indexed currentSerialNumber, uint256 price, bool BTC); // Final parameter `BTC` to indicate if purchase with BTC\n    // address public WBTCaddress; // On mainnet: 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599\n    // IERC20 private WBTC; // Instantiating WBTC contract to call `transferFrom` when purchasing with WBTC\n    // address payable public multisig; // Ensure you are comfortable with m-of-n signatories on Gnosis Safe (don't trust, verify)\n\n    constructor() {\n        // require(_multisig != address(0), \"multisig has be set up\");\n        // require(_WBTCaddress != address(0), \"WBTC has be set up\");\n\n        // multisig = _multisig;\n        // cutoffTimestamp = _cutoffTimestamp;\n        // WBTCaddress = _WBTCaddress;\n        // WBTC = IERC20(WBTCaddress);\n\n        // for (uint i=0; i<128; i++) {\n        //     _mint(multisig, i); \n        // }\n    }\n\n\n    string[] public organisations;\n    uint public organisationsLength;\n\n    function addOrganisation(string calldata name) public {\n        organisations.push(name);\n        organisationsLength++;\n    }\n\n    // function getOrganisation(uint index) public view returns(string memory) {\n    //     return organisations[index];\n    // }\n\n    \n\n    // // 1. Deploy 2. Include the smart contract address in the PDF. 3. Save IPFS has in this method.\n    // function setGenesis(string memory IPFSURI) public onlyOwner {\n    //     require(bytes(GENESIS).length == 0, \"GENESIS can be set only once\"); // https://ethereum.stackexchange.com/a/46254/2524\n    //     GENESIS = IPFSURI;\n    // }\n\n    // function setTokenURI(string memory URI) public onlyOwner {\n    //     require(bytes(_tokenURI).length == 0, \"_tokenURI can be set only once\");\n    //     _tokenURI = URI;\n    // }\n\n    // function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\n    //     require(_exists(tokenId), \"ERC721Metadata: URI query for nonexistent token\");\n    //     return _tokenURI;\n    // }\n \n    // receive() external payable { // Fallback function\n    //     purchase();\n    // }\n\n    // function purchase() payable public {\n    //     require(msg.value >= currentPrice, \"Not enough ETH. Check the current price.\");\n    //     uint256 refund = msg.value - currentPrice;\n    //     if (refund > 0) {\n    //         (bool sent1, bytes memory data1) = payable(msg.sender).call{value: refund}(\"\");\n    //         require(sent1, \"Failed to send ETH refund to the sender\");\n    //     }       \n\n    //     // Sending to Gnosis Safe takes more than 21k gas limit on `transfer`\n    //     // Need to use something else, see: https://solidity-by-example.org/sending-ether/\n    //     (bool sent2, bytes memory data2) = multisig.call{value: currentPrice}(\"\");\n    //     require(sent2, \"Failed to send ETH to the multisig\");\n\n    //     _mint(msg.sender, currentSerialNumber);\n    //     emit Purchase(msg.sender, currentSerialNumber, currentPrice, false);\n    //     currentSerialNumber++;\n\n    //     if (block.timestamp > cutoffTimestamp) {\n    //         currentPrice = currentPrice * multiplier / divisor; // * 1001 / 1000 === increase by 0.1% (no longer SafeMath, compiler by default)\n    //     }\n    // }\n\n    // // This is inspired by Hackers Congress Paralelní Polis: final ticket available for 1 BTC\n    // // Network State Genesis offers *UNLIMITED* number of NFTs for 1 BTC\n    // // How is that even possible?\n    // // As we establish multiplanetary civilisation, some of the accrued money will be put back into the circulation (Bitcoin recycling)\n    // function purchaseWithWBTC() public {\n    //     WBTC.transferFrom(msg.sender, multisig, 10 ** 18);\n    //     _mint(msg.sender, currentSerialNumber);\n    //     emit Purchase(msg.sender, currentSerialNumber, 0, true);\n    //     currentSerialNumber++;\n    // }\n\n    // // ALWAYS FREE (only the gas fee) and available to everyone. Free claim as opposed to the actual purchase.\n    // // BUT: if someone can afford to send a transaction on ETH, they surely can afford 0.07 ETH? (not 100% sure if `free claim` is really needed)\n    // // TODO: cross-check with proof of humanity (sybil attack) and store signature off-chain\n    // // We do not know yet, probably there will be some airdrop to all the citizens? TBD. TBC.\n    // event FreeClaim(address indexed addr);\n    // mapping(address => uint) public registrationTime;\n    \n    // function freeClaim() public {\n    //     require(registrationTime[msg.sender] == 0, \"Address already registered\");\n    //     registrationTime[msg.sender] = block.timestamp;\n    //     emit FreeClaim(msg.sender);\n    // }\n\n    // // On-chain interface for communication\n    // // Naturally, there will be off-chain solutions as well\n    // event MessagePosted(string IPFShash, address author);\n    // mapping(address => string[]) public messages;\n\n    // function publishMessage(string memory IPFShash) public {\n    //     string[] memory messagesUser = messages[msg.sender];\n    //     if (messagesUser.length == 0) {\n    //         messages[msg.sender] = [IPFShash];\n    //     } else {\n    //         messages[msg.sender].push(IPFShash);\n    //     }\n\n    //     emit MessagePosted(IPFShash, msg.sender);\n    // }\n\n    // // Need to have decidated function, see: https://ethereum.stackexchange.com/a/20838/2524\n    // function getMessagesLength(address addr) public view returns(uint256) {\n    //     return messages[addr].length;\n    // }\n}",
  "sourcePath": "/Users/dev/Code/esgtbl/contracts/NetworkStateGenesis.sol",
  "ast": {
    "absolutePath": "project:/contracts/NetworkStateGenesis.sol",
    "exportedSymbols": {
      "Context": [
        193
      ],
      "NetworkStateGenesis": [
        62
      ],
      "Ownable": [
        171
      ]
    },
    "id": 63,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          "0.8",
          ".11"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:1"
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "file": "../node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "id": 35,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 63,
        "sourceUnit": 172,
        "src": "56:68:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 36,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 171,
              "src": "389:7:1"
            },
            "id": 37,
            "nodeType": "InheritanceSpecifier",
            "src": "389:7:1"
          }
        ],
        "canonicalName": "NetworkStateGenesis",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 62,
        "linearizedBaseContracts": [
          62,
          171,
          193
        ],
        "name": "NetworkStateGenesis",
        "nameLocation": "366:19:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 40,
              "nodeType": "Block",
              "src": "1669:397:1",
              "statements": []
            },
            "id": 41,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1666:2:1"
            },
            "returnParameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1669:0:1"
            },
            "scope": 62,
            "src": "1655:411:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "246f8c44",
            "id": 44,
            "mutability": "mutable",
            "name": "organisations",
            "nameLocation": "2089:13:1",
            "nodeType": "VariableDeclaration",
            "scope": 62,
            "src": "2073:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 42,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2073:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 43,
              "nodeType": "ArrayTypeName",
              "src": "2073:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "4c71de3b",
            "id": 46,
            "mutability": "mutable",
            "name": "organisationsLength",
            "nameLocation": "2120:19:1",
            "nodeType": "VariableDeclaration",
            "scope": 62,
            "src": "2108:31:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "2108:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 60,
              "nodeType": "Block",
              "src": "2200:72:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "2229:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      ],
                      "expression": {
                        "id": 51,
                        "name": "organisations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "2210:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "2210:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$bound_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2210:24:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56,
                  "nodeType": "ExpressionStatement",
                  "src": "2210:24:1"
                },
                {
                  "expression": {
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "2244:21:1",
                    "subExpression": {
                      "id": 57,
                      "name": "organisationsLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "2244:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59,
                  "nodeType": "ExpressionStatement",
                  "src": "2244:21:1"
                }
              ]
            },
            "functionSelector": "988760c1",
            "id": 61,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addOrganisation",
            "nameLocation": "2155:15:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2187:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61,
                  "src": "2171:20:1",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2170:22:1"
            },
            "returnParameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2200:0:1"
            },
            "scope": 62,
            "src": "2146:126:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 63,
        "src": "357:6258:1",
        "usedErrors": []
      }
    ],
    "src": "32:6583:1"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/NetworkStateGenesis.sol",
    "exportedSymbols": {
      "Context": [
        193
      ],
      "NetworkStateGenesis": [
        62
      ],
      "Ownable": [
        171
      ]
    },
    "id": 63,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34,
        "literals": [
          "solidity",
          "0.8",
          ".11"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:1"
      },
      {
        "absolutePath": "project:/node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "file": "../node_modules/@openzeppelin/contracts/access/Ownable.sol",
        "id": 35,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 63,
        "sourceUnit": 172,
        "src": "56:68:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 36,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 171,
              "src": "389:7:1"
            },
            "id": 37,
            "nodeType": "InheritanceSpecifier",
            "src": "389:7:1"
          }
        ],
        "canonicalName": "NetworkStateGenesis",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 62,
        "linearizedBaseContracts": [
          62,
          171,
          193
        ],
        "name": "NetworkStateGenesis",
        "nameLocation": "366:19:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 40,
              "nodeType": "Block",
              "src": "1669:397:1",
              "statements": []
            },
            "id": 41,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1666:2:1"
            },
            "returnParameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1669:0:1"
            },
            "scope": 62,
            "src": "1655:411:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "246f8c44",
            "id": 44,
            "mutability": "mutable",
            "name": "organisations",
            "nameLocation": "2089:13:1",
            "nodeType": "VariableDeclaration",
            "scope": 62,
            "src": "2073:29:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 42,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2073:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 43,
              "nodeType": "ArrayTypeName",
              "src": "2073:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "4c71de3b",
            "id": 46,
            "mutability": "mutable",
            "name": "organisationsLength",
            "nameLocation": "2120:19:1",
            "nodeType": "VariableDeclaration",
            "scope": 62,
            "src": "2108:31:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 45,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "2108:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 60,
              "nodeType": "Block",
              "src": "2200:72:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 54,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 48,
                        "src": "2229:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      ],
                      "expression": {
                        "id": 51,
                        "name": "organisations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 44,
                        "src": "2210:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "2210:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$bound_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2210:24:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56,
                  "nodeType": "ExpressionStatement",
                  "src": "2210:24:1"
                },
                {
                  "expression": {
                    "id": 58,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "2244:21:1",
                    "subExpression": {
                      "id": 57,
                      "name": "organisationsLength",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 46,
                      "src": "2244:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 59,
                  "nodeType": "ExpressionStatement",
                  "src": "2244:21:1"
                }
              ]
            },
            "functionSelector": "988760c1",
            "id": 61,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addOrganisation",
            "nameLocation": "2155:15:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 49,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 48,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2187:4:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61,
                  "src": "2171:20:1",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 47,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2170:22:1"
            },
            "returnParameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2200:0:1"
            },
            "scope": 62,
            "src": "2146:126:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 63,
        "src": "357:6258:1",
        "usedErrors": []
      }
    ],
    "src": "32:6583:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.11+commit.d7f03943.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.5",
  "updatedAt": "2022-03-07T21:59:07.205Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}