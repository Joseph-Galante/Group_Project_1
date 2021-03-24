// GET
const getData = async () =>
{
    let res = await fetch('https://myapi-profstream.herokuapp.com/api/a22f3a/persons');
    let data = await res.json();
    console.log(data);
    return data;
}

// POST
const addData = async () =>
{
    let res = await fetch('https://myapi-profstream.herokuapp.com/api/a22f3a/persons',
    {
        method: 'post',
        headers:
        {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(
        {
            "firstname": "Dead",
            "lastname": "Pool",
            "email": "wham!addict@kicksass.com",
            "username": "unicornsniffer69"
        })
    });
}

// PUT
const updateData = async () =>
{
    let res = await fetch('https://myapi-profstream.herokuapp.com/api/a22f3a/persons/4756',
    {
        method: 'put',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        {
            "firstname": "Dead",
            "lastname": "Pool",
            "email": "wham!addict@kicks-ass.com",
            "username": "unicornsniffer69"
        })
    });
}

// DELETE
const removeData = async () =>
{
    let res = await fetch('https://myapi-profstream.herokuapp.com/api/a22f3a/persons/4757',
    {
        method: 'delete'
    });
}