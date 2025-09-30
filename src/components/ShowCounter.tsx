function ShowCounter({counter}: {counter: number}) {    
    return (
        <div>
            <p className="text-2xl font-medium text-gray-700 mb-6">Counter: {counter}</p>
        </div>
    )
}

export default ShowCounter;