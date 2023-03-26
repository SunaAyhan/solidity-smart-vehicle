const device_bytecode = "0x608060405260006005556000600655600060075560006008553480156200002557600080fd5b50604051620025f2380380620025f283398181016040528101906200004b9190620003b3565b6200006b6200005f6200011960201b60201c565b6200012160201b60201c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508560098190555084600a9081620000c491906200072b565b5083600b9081620000d691906200072b565b5082600c9081620000e891906200072b565b5081600d9081620000fa91906200072b565b5080600e90816200010c91906200072b565b5050505050505062000812565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6200020e81620001f9565b81146200021a57600080fd5b50565b6000815190506200022e8162000203565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000289826200023e565b810181811067ffffffffffffffff82111715620002ab57620002aa6200024f565b5b80604052505050565b6000620002c0620001e5565b9050620002ce82826200027e565b919050565b600067ffffffffffffffff821115620002f157620002f06200024f565b5b620002fc826200023e565b9050602081019050919050565b60005b83811015620003295780820151818401526020810190506200030c565b60008484015250505050565b60006200034c6200034684620002d3565b620002b4565b9050828152602081018484840111156200036b576200036a62000239565b5b6200037884828562000309565b509392505050565b600082601f83011262000398576200039762000234565b5b8151620003aa84826020860162000335565b91505092915050565b60008060008060008060c08789031215620003d357620003d2620001ef565b5b6000620003e389828a016200021d565b965050602087015167ffffffffffffffff811115620004075762000406620001f4565b5b6200041589828a0162000380565b955050604087015167ffffffffffffffff811115620004395762000438620001f4565b5b6200044789828a0162000380565b945050606087015167ffffffffffffffff8111156200046b576200046a620001f4565b5b6200047989828a0162000380565b935050608087015167ffffffffffffffff8111156200049d576200049c620001f4565b5b620004ab89828a0162000380565b92505060a087015167ffffffffffffffff811115620004cf57620004ce620001f4565b5b620004dd89828a0162000380565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200053d57607f821691505b602082108103620005535762000552620004f5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005bd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200057e565b620005c986836200057e565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200060c620006066200060084620001f9565b620005e1565b620001f9565b9050919050565b6000819050919050565b6200062883620005eb565b62000640620006378262000613565b8484546200058b565b825550505050565b600090565b6200065762000648565b620006648184846200061d565b505050565b5b818110156200068c57620006806000826200064d565b6001810190506200066a565b5050565b601f821115620006db57620006a58162000559565b620006b0846200056e565b81016020851015620006c0578190505b620006d8620006cf856200056e565b83018262000669565b50505b505050565b600082821c905092915050565b60006200070060001984600802620006e0565b1980831691505092915050565b60006200071b8383620006ed565b9150826002028217905092915050565b6200073682620004ea565b67ffffffffffffffff8111156200075257620007516200024f565b5b6200075e825462000524565b6200076b82828562000690565b600060209050601f831160018114620007a357600084156200078e578287015190505b6200079a85826200070d565b8655506200080a565b601f198416620007b38662000559565b60005b82811015620007dd57848901518255600182019150602085019450602081019050620007b6565b86831015620007fd5784890151620007f9601f891682620006ed565b8355505b6001600288020188555050505b505050505050565b611dd080620008226000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80639657e64c116100b8578063aec798811161007c578063aec798811461034a578063c1a7a8061461036a578063d2981f041461039c578063f2fde38b146103b8578063f3f902c2146103d4578063fe0dabc5146103f957610137565b80639657e64c146102795780639b04d16014610295578063a66b230a146102ca578063a8357a08146102fc578063a8543bae1461032e57610137565b806357eb6ef1116100ff57806357eb6ef1146101e55780635f5db19b14610217578063715018a614610235578063755b1d241461023f5780638da5cb5b1461025b57610137565b8063031733861461013c578063147f9b9b1461015a5780633071bf1214610178578063389e3fe0146101945780634fb658b1146101b0575b600080fd5b610144610415565b60405161015191906112d3565b60405180910390f35b61016261043f565b60405161016f919061137e565b60405180910390f35b610192600480360381019061018d91906113ea565b6104d1565b005b6101ae60048036038101906101a99190611572565b61053f565b005b6101ca60048036038101906101c591906115bb565b61055a565b6040516101dc969594939291906115f7565b60405180910390f35b6101ff60048036038101906101fa91906115bb565b610719565b60405161020e93929190611666565b60405180910390f35b61021f610853565b60405161022c91906116ab565b60405180910390f35b61023d61085d565b005b610259600480360381019061025491906116c6565b610871565b005b6102636108f7565b60405161027091906112d3565b60405180910390f35b610293600480360381019061028e91906115bb565b610920565b005b6102af60048036038101906102aa91906115bb565b610932565b6040516102c1969594939291906115f7565b60405180910390f35b6102e460048036038101906102df91906115bb565b610a7e565b6040516102f393929190611751565b60405180910390f35b610316600480360381019061031191906115bb565b610aa8565b60405161032593929190611666565b60405180910390f35b61034860048036038101906103439190611572565b610c15565b005b610352610c30565b60405161036193929190611751565b60405180910390f35b610384600480360381019061037f91906115bb565b610c49565b60405161039393929190611751565b60405180910390f35b6103b660048036038101906103b19190611788565b610ca0565b005b6103d260048036038101906103cd9190611879565b610d59565b005b6103dc610ddc565b6040516103f09897969594939291906118a6565b60405180910390f35b610413600480360381019061040e9190611879565b6110f3565b005b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600d805461044e90611976565b80601f016020809104026020016040519081016040528092919081815260200182805461047a90611976565b80156104c75780601f1061049c576101008083540402835291602001916104c7565b820191906000526020600020905b8154815290600101906020018083116104aa57829003601f168201915b5050505050905090565b60405180606001604052808481526020018381526020018281525060026000600554815260200190815260200160002060008201518160000155602082015181600101556040820151816002015590505060056000815480929190610535906119d6565b9190505550505050565b610547611148565b80600d90816105569190611bca565b5050565b60006060806000806000600460008881526020019081526020016000206000015460046000898152602001908152602001600020600101600460008a8152602001908152602001600020600201600460008b815260200190815260200160002060030154600460008c815260200190815260200160002060040154600460008d8152602001908152602001600020600501548480546105f890611976565b80601f016020809104026020016040519081016040528092919081815260200182805461062490611976565b80156106715780601f1061064657610100808354040283529160200191610671565b820191906000526020600020905b81548152906001019060200180831161065457829003601f168201915b5050505050945083805461068490611976565b80601f01602080910402602001604051908101604052809291908181526020018280546106b090611976565b80156106fd5780601f106106d2576101008083540402835291602001916106fd565b820191906000526020600020905b8154815290600101906020018083116106e057829003601f168201915b5050505050935095509550955095509550955091939550919395565b600360205280600052604060002060009150905080600001549080600101805461074290611976565b80601f016020809104026020016040519081016040528092919081815260200182805461076e90611976565b80156107bb5780601f10610790576101008083540402835291602001916107bb565b820191906000526020600020905b81548152906001019060200180831161079e57829003601f168201915b5050505050908060020180546107d090611976565b80601f01602080910402602001604051908101604052809291908181526020018280546107fc90611976565b80156108495780601f1061081e57610100808354040283529160200191610849565b820191906000526020600020905b81548152906001019060200180831161082c57829003601f168201915b5050505050905083565b6000600854905090565b610865611148565b61086f60006111c6565b565b6040518060600160405280848152602001838152602001828152506003600060065481526020019081526020016000206000820151816000015560208201518160010190816108c09190611bca565b5060408201518160020190816108d69190611bca565b50905050600660008154809291906108ed906119d6565b9190505550505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610928611148565b8060088190555050565b600460205280600052604060002060009150905080600001549080600101805461095b90611976565b80601f016020809104026020016040519081016040528092919081815260200182805461098790611976565b80156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b5050505050908060020180546109e990611976565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1590611976565b8015610a625780601f10610a3757610100808354040283529160200191610a62565b820191906000526020600020905b815481529060010190602001808311610a4557829003601f168201915b5050505050908060030154908060040154908060050154905086565b60026020528060005260406000206000915090508060000154908060010154908060020154905083565b600060608060036000858152602001908152602001600020600001546003600086815260200190815260200160002060010160036000878152602001908152602001600020600201818054610afc90611976565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2890611976565b8015610b755780601f10610b4a57610100808354040283529160200191610b75565b820191906000526020600020905b815481529060010190602001808311610b5857829003601f168201915b50505050509150808054610b8890611976565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb490611976565b8015610c015780601f10610bd657610100808354040283529160200191610c01565b820191906000526020600020905b815481529060010190602001808311610be457829003601f168201915b505050505090509250925092509193909250565b610c1d611148565b80600c9081610c2c9190611bca565b5050565b6000806000600554600654600754925092509250909192565b60008060006002600085815260200190815260200160002060000154600260008681526020019081526020016000206001015460026000878152602001908152602001600020600201549250925092509193909250565b6040518060c0016040528087815260200186815260200185815260200184815260200183815260200182815250600460006007548152602001908152602001600020600082015181600001556020820151816001019081610d019190611bca565b506040820151816002019081610d179190611bca565b50606082015181600301556080820151816004015560a0820151816005015590505060076000815480929190610d4c906119d6565b9190505550505050505050565b610d61611148565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc790611d0e565b60405180910390fd5b610dd9816111c6565b50565b6000606080606080600060606000600954600a600b600c600d600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600e600854868054610e2990611976565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5590611976565b8015610ea25780601f10610e7757610100808354040283529160200191610ea2565b820191906000526020600020905b815481529060010190602001808311610e8557829003601f168201915b50505050509650858054610eb590611976565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee190611976565b8015610f2e5780601f10610f0357610100808354040283529160200191610f2e565b820191906000526020600020905b815481529060010190602001808311610f1157829003601f168201915b50505050509550848054610f4190611976565b80601f0160208091040260200160405190810160405280929190818152602001828054610f6d90611976565b8015610fba5780601f10610f8f57610100808354040283529160200191610fba565b820191906000526020600020905b815481529060010190602001808311610f9d57829003601f168201915b50505050509450838054610fcd90611976565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff990611976565b80156110465780601f1061101b57610100808354040283529160200191611046565b820191906000526020600020905b81548152906001019060200180831161102957829003601f168201915b5050505050935081805461105990611976565b80601f016020809104026020016040519081016040528092919081815260200182805461108590611976565b80156110d25780601f106110a7576101008083540402835291602001916110d2565b820191906000526020600020905b8154815290600101906020018083116110b557829003601f168201915b50505050509150975097509750975097509750975097509091929394959697565b6110fb611148565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061114581610d59565b50565b61115061128a565b73ffffffffffffffffffffffffffffffffffffffff1661116e6108f7565b73ffffffffffffffffffffffffffffffffffffffff16146111c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bb90611d7a565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112bd82611292565b9050919050565b6112cd816112b2565b82525050565b60006020820190506112e860008301846112c4565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561132857808201518184015260208101905061130d565b60008484015250505050565b6000601f19601f8301169050919050565b6000611350826112ee565b61135a81856112f9565b935061136a81856020860161130a565b61137381611334565b840191505092915050565b600060208201905081810360008301526113988184611345565b905092915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6113c7816113b4565b81146113d257600080fd5b50565b6000813590506113e4816113be565b92915050565b600080600060608486031215611403576114026113aa565b5b6000611411868287016113d5565b9350506020611422868287016113d5565b9250506040611433868287016113d5565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61147f82611334565b810181811067ffffffffffffffff8211171561149e5761149d611447565b5b80604052505050565b60006114b16113a0565b90506114bd8282611476565b919050565b600067ffffffffffffffff8211156114dd576114dc611447565b5b6114e682611334565b9050602081019050919050565b82818337600083830152505050565b6000611515611510846114c2565b6114a7565b90508281526020810184848401111561153157611530611442565b5b61153c8482856114f3565b509392505050565b600082601f8301126115595761155861143d565b5b8135611569848260208601611502565b91505092915050565b600060208284031215611588576115876113aa565b5b600082013567ffffffffffffffff8111156115a6576115a56113af565b5b6115b284828501611544565b91505092915050565b6000602082840312156115d1576115d06113aa565b5b60006115df848285016113d5565b91505092915050565b6115f1816113b4565b82525050565b600060c08201905061160c60008301896115e8565b818103602083015261161e8188611345565b905081810360408301526116328187611345565b905061164160608301866115e8565b61164e60808301856115e8565b61165b60a08301846115e8565b979650505050505050565b600060608201905061167b60008301866115e8565b818103602083015261168d8185611345565b905081810360408301526116a18184611345565b9050949350505050565b60006020820190506116c060008301846115e8565b92915050565b6000806000606084860312156116df576116de6113aa565b5b60006116ed868287016113d5565b935050602084013567ffffffffffffffff81111561170e5761170d6113af565b5b61171a86828701611544565b925050604084013567ffffffffffffffff81111561173b5761173a6113af565b5b61174786828701611544565b9150509250925092565b600060608201905061176660008301866115e8565b61177360208301856115e8565b61178060408301846115e8565b949350505050565b60008060008060008060c087890312156117a5576117a46113aa565b5b60006117b389828a016113d5565b965050602087013567ffffffffffffffff8111156117d4576117d36113af565b5b6117e089828a01611544565b955050604087013567ffffffffffffffff811115611801576118006113af565b5b61180d89828a01611544565b945050606061181e89828a016113d5565b935050608061182f89828a016113d5565b92505060a061184089828a016113d5565b9150509295509295509295565b611856816112b2565b811461186157600080fd5b50565b6000813590506118738161184d565b92915050565b60006020828403121561188f5761188e6113aa565b5b600061189d84828501611864565b91505092915050565b6000610100820190506118bc600083018b6115e8565b81810360208301526118ce818a611345565b905081810360408301526118e28189611345565b905081810360608301526118f68188611345565b9050818103608083015261190a8187611345565b905061191960a08301866112c4565b81810360c083015261192b8185611345565b905061193a60e08301846115e8565b9998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061198e57607f821691505b6020821081036119a1576119a0611947565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119e1826113b4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a1357611a126119a7565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611a807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611a43565b611a8a8683611a43565b95508019841693508086168417925050509392505050565b6000819050919050565b6000611ac7611ac2611abd846113b4565b611aa2565b6113b4565b9050919050565b6000819050919050565b611ae183611aac565b611af5611aed82611ace565b848454611a50565b825550505050565b600090565b611b0a611afd565b611b15818484611ad8565b505050565b5b81811015611b3957611b2e600082611b02565b600181019050611b1b565b5050565b601f821115611b7e57611b4f81611a1e565b611b5884611a33565b81016020851015611b67578190505b611b7b611b7385611a33565b830182611b1a565b50505b505050565b600082821c905092915050565b6000611ba160001984600802611b83565b1980831691505092915050565b6000611bba8383611b90565b9150826002028217905092915050565b611bd3826112ee565b67ffffffffffffffff811115611bec57611beb611447565b5b611bf68254611976565b611c01828285611b3d565b600060209050601f831160018114611c345760008415611c22578287015190505b611c2c8582611bae565b865550611c94565b601f198416611c4286611a1e565b60005b82811015611c6a57848901518255600182019150602085019450602081019050611c45565b86831015611c875784890151611c83601f891682611b90565b8355505b6001600288020188555050505b505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611cf86026836112f9565b9150611d0382611c9c565b604082019050919050565b60006020820190508181036000830152611d2781611ceb565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611d646020836112f9565b9150611d6f82611d2e565b602082019050919050565b60006020820190508181036000830152611d9381611d57565b905091905056fea26469706673582212208be45dd6d83689fe992bf236d23ba8ecf81fe1396dccbfd34ab037f989c78c9564736f6c63430008110033"

module.exports = device_bytecode