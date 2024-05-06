import express from 'express';
import findAll from "./queries/findAll"
import insertValue from "./queries/insertValue"

export async function createApp() {

    const app = express();

    app.get('/', async (req, res) => {
        await insertValue()

        const people = await findAll()

        const html = `<h1>Full Cycle Rocks!</h1>\n
        <ul>
        ${people.map((person: {name: string}) => {
                return `<li>${person.name}</li>`;
            }).join('')}
        </ul>`
        res.send(html)
    })


    return app
}

