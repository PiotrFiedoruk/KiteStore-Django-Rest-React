import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToBasket, removeFromBasket } from '../actions/basketActions'

function BasketScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1 // split by equal sign and take qty value
    const dispatch = useDispatch()

    const basket = useSelector(state=> state.basket)
    const { basketItems } = basket


    // dispatch action to update state and add items to local storage
    useEffect(() => {
        if(productId){
            dispatch(addToBasket(productId, qty))
        }
    }, [dispatch, productId, qty])

    //remove from basket handler
    const removeFromBasketHandler = (id) => {
        dispatch(removeFromBasket(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=delivery')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Basket</h1>
                {basketItems.length === 0 ? (
                    <Message variant='info'>
                        Your basket is empty <Link to='/'>Go back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {basketItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        € {item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToBasket(item.product, Number(e.target.value)))}>
                                                {
                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                        </Form.Control>
                                        </Col>
                                    <Col md={1}>
                                        <Button
                                            type='button'
                                            variant='light'
                                            onClick={()=> removeFromBasketHandler(item.product)}
                                            >
                                            <i className = 'fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            {/*reduce function*/}
                            <h2>Total: {basketItems.reduce((acc, item) => acc + item.qty, 0)} items</h2>
                            <h5>Price: € {basketItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                            type='button'
                            className='btn-block'
                            disabled={basketItems.length === 0}
                            onClick={checkoutHandler}
                            >
                                Go to checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    );
}

export default BasketScreen;