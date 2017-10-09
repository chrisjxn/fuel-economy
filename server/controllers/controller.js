let refuels = [
    {
        id: 0,
        date: '6/1/2017',
        odometer: 10000,
        fuelPrice: 2.729,
        gallons: 11.045,
        notes: ''
    },
    {
        id: 1,
        date: '6/6/2017',
        odometer: 10285,
        fuelPrice: 2.749,
        gallons: 10.548,
        notes: ''
    },
    {
        id: 2,
        date: '6/12/2017',
        odometer: 10556,
        fuelPrice: 2.559,
        gallons: 10.847,
        notes: ''
    },
    {
        id: 3,
        date: '6/26/2017',
        odometer: 10855,
        fuelPrice: 2.699,
        gallons: 11.109,
        notes: ''
    },
    {
        id: 4,
        date: '7/6/2017',
        odometer: 11159,
        fuelPrice: 3.009,
        gallons: 12.928,
        notes: ''
    },
    {
        id: 5,
        date: '7/14/2017',
        odometer: 11449,
        fuelPrice: 2.609,
        gallons: 11.759,
        notes: ''
    },
    {
        id: 6,
        date: '7/26/2017',
        odometer: 11718,
        fuelPrice: 3.029,
        gallons: 10.3,
        notes: ''
    },
    {
        id: 7,
        date: '8/4/2017',
        odometer: 11979,
        fuelPrice: 3.069,
        gallons: 10.702,
        notes: ''
    },
    {
        id: 8,
        date: '8/14/2017',
        odometer: 12245,
        fuelPrice: 2.599,
        gallons: 12.097,
        notes: ''
    },
    {
        id: 9,
        date: '8/24/2017',
        odometer: 12567,
        fuelPrice: 2.589,
        gallons: 12.573,
        notes: ''
    },
    {
        id: 10,
        date: '9/4/2017',
        odometer: 12841,
        fuelPrice: 2.509,
        gallons: 10.279,
        notes: ''
    },
    {
        id: 11,
        date: '9/17/2017',
        odometer: 13112,
        fuelPrice: 2.839,
        gallons: 10.683,
        notes: ''
    },
    {
        id: 12,
        date: '9/23/2017',
        odometer: 13471,
        fuelPrice: 2.979,
        gallons: 12.743,
        notes: ''
    },
    {
        id: 13,
        date: '9/29/2017',
        odometer: 13732,
        fuelPrice: 3.079,
        gallons: 10.426,
        notes: ''
    },
    {
        id: 14,
        date: '10/9/2017',
        odometer: 13992,
        fuelPrice: 2.969,
        gallons: 10.012,
        notes: ''
    }
];
let id = 15;

module.exports = {
    create: (req, res) => {
        req.body.id = id;
        id++;
        let newRefuel = Object.assign({}, req.body);

        refuels.push(newRefuel);
        res.status(200).send(refuels);
    },
    read: (req, res) => {
        res.status(200).send(refuels);
    },
    update: (req, res) => {
        refuels = refuels.map(item => {
            if (+req.params.id === item.id) {
                item = Object.assign(item, req.body)
            }
            return item
        })
        res.status(200).send(refuels);
    },
    delete: (req, res) => {
        refuels = refuels.filter(item => {
            return item.id !== +req.params.id
        })
        res.status(200).send(refuels)
    }
}