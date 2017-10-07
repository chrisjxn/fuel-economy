let refuels = [
    {
        id: 0,
        date: "6/1/2017",
        odometer: 10000
    },
    {
        id: 1,
        date: "6/6/2017",
        odometer: 10285
    },
    {
        id: 2,
        date: "6/12/2017",
        odometer: 10556
    },
    {
        id: 3,
        date: "6/26/2017",
        odometer: 10855
    },
    {
        id: 4,
        date: "7/6/2017",
        odometer: 11159
    },
    {
        id: 5,
        date: "7/14/2017",
        odometer: 11449
    },
    {
        id: 6,
        date: "7/26/2017",
        odometer: 11718
    },
    {
        id: 7,
        date: "8/4/2017",
        odometer: 11979
    },
    {
        id: 8,
        date: "8/14/2017",
        odometer: 12245
    },
    {
        id: 9,
        date: "8/24/2017",
        odometer: 12567
    },
    {
        id: 10,
        date: "9/4/2017",
        odometer: 12841
    },
    {
        id: 11,
        date: "9/17/2014",
        odometer: 13112
    },
    {
        id: 12,
        date: "9/23/2017",
        odometer: 13471
    },
    {
        id: 13,
        date: "9/29/2017",
        odometer: 13732
    },
    {
        id: 14,
        date: "10/9/2017",
        odometer: 13992
    },

];
let id = 15;

module.exports = {
    create: (req, res) => {
        req.body.id = id;
        id++;
        let newRefuel = Object.assign({}, req.body);

        refuels.push(newRefuel);
        res.status(200).send(refuels);
    }
}