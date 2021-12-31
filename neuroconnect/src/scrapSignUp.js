<Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Grid item xs = {6}>
                        <Form.Group id="name">
                                <Form.Label>
                                    First and Last Name
                                </Form.Label>
                                <Form.Control ref={nameRef} required/>
                        </Form.Group>
                    </Grid>

                    <Grid item xs ={6}>
                    <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                            
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>
                                Password confirmation
                            </Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Form.Group id="mentor">
                            <Form.Label>
                                Mentor or Mentee?
                            </Form.Label>
                            <Form.Control ref={mentorRef} required/>
                        </Form.Group>
                        <Form.Group id="mentor">
                            <Form.Label>
                                Neurodivergent?
                            </Form.Label>
                            <Form.Control ref={neurodivergentRef} required/>
                        </Form.Group>
                        <Form.Group id="mentor">
                            <Form.Label>
                                Career Field or Career Interest? 
                            </Form.Label>
                            <Form.Control ref={neurodivergentRef} required/>
                        </Form.Group>
                        <br/>
                        <Button disabled={loading} type="submit">
                            Sign up
                        </Button>
                    </Grid>
</Form>