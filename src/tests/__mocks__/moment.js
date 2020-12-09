//* This mock fixes point of time when moment() is called 
//* with no arguments as the timestamp of the current moment
//* would always create an error

//* With with import the actual moment lib gets imported
const moment = jest.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}