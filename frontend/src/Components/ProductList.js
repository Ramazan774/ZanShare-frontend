import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductShow from './ProductShow'
import Product from './Product'
import { connect } from 'react-redux'
import { thunkFetchProducts } from '../actions/index'

class ProductList extends React.Component {
    state = {foo: 'bar'}
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.thunkFetchProducts()
    }

    
}