import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Web3 from 'web3';

class AvalancheConnector extends Component {

    constructor(props, context) {
        super()
    }

    connectMainnetClickHandler=() =>{
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            window.ethereum.request({method: 'eth_requestAccounts'})
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{chainId: '0xa86a',
                    chainName: "Avalanche Mainnet",
                    nativeCurrency: {
                        name: "AVAX",
                        symbol: "AVAX",
                        decimals: 18
                    },
                    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                    blockExplorerUrls: ['https://cchain.explorer.avax.network/']
                }]
            })
        }
    }

    connectTestnetClickHandler=() =>{
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            window.ethereum.request({method: 'eth_requestAccounts'})
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{chainId: '0xa869',
                    chainName: "Fuji Testnet",
                    nativeCurrency: {
                        name: "AVAX",
                        symbol: "AVAX",
                        decimals: 18
                    },
                    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                    blockExplorerUrls: ['https://cchain.explorer.avax-test.network/']
                }]
            })
        }
    }

    render() {
        return(
        <Container>
            <Row>
                <Col>
                    <h3>Sample code to connect Avalanche Mainnet and Fuji Testnet</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={()=>this.connectMainnetClickHandler()}>Connect to Avalanche Mainnet</Button> 
                </Col>
                <Col>
                    <Button variant="success" onClick={()=>this.connectTestnetClickHandler()}>Connect to Fuji Testnet</Button>
                </Col>
            </Row>
        </Container>
        )
    }

}

export default AvalancheConnector