import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../Components/shared/card'
import { Button } from '../../Components/shared/button'
import Layout from '../../Components/dashboard/layout'


const CreateEvent = () => {
 

    return (
        <Layout>
            <div className='w-full mt-10 flex justify-center items-center'>
                <Card className="w-full max-w-2xl shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-deep-blue">Create New Event</CardTitle>
                        <CardDescription className="text-deep-blue">Fill out the details for your upcoming event.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="theme" className="text-deep-blue">Event Name</label>
                                <input 
                                    id="theme" placeholder="Input event name" type='text' 
                                    name='theme'
                                    value={formData.theme}
                                    onChange={inputChange}
                                />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="organizer" className="text-deep-blue">Expected Attendee</label>
                                <input 
                                    id="total_ticket" placeholder="100" type='number' 
                                    name='total_ticket'
                                    value={formData.total_ticket}
                                    onChange={inputChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="event-type" className="text-deep-blue">Event Type</label>
                                <select 
                                    id="event-type"
                                    name='type'
                                    value={formData.type}
                                    onChange={inputChange}
                                >
                                    <option value="conference">Conference</option>
                                    <option value="workshop">Workshop</option>
                                    <option value="meetup">Meetup</option>
                                    <option value="others">Other</option>
                                </select>

                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="ticket-price" className="text-deep-blue">Ticket Price</label>
                                <input 
                                    id="ticket-price" type="number" placeholder="0.00" 
                                    name='ticketPrice'
                                    value={formData.ticketPrice}
                                    onChange={inputChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="start-date" className="text-deep-blue">Start Date</label>
                                <input 
                                    type='date' 
                                    name='startTime'
                                    value={formData.startTime}
                                    onChange={inputChange}
                                />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="start-date" className="text-deep-blue">End Date</label>
                                <input 
                                    type='date' 
                                    name='endTime'
                                    value={formData.endTime}
                                    onChange={inputChange}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button onClick={handleSubmit} className="text-primary hover:text-deep-blue bg-deep-blue ">Create Event</Button>
                    </CardFooter>
                </Card>
            </div>
        </Layout>
    )
}

export default CreateEvent