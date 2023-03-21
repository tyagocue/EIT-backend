const app = require('./app')
const port = 4000;
const dbURL = 'mongodb+srv://SantiCue:Bichita981@servermongo.q2u7qjq.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require('mongoose');

mongoose.connect(dbURL).then(() => {
                            console.log(`\x1b[35m Conexión a la DB satisfactoria \x1b[37m` );

                            app.listen(port, () => {
                                console.log(`\x1b[36m Servidor funcionando en puerto ${port} \x1b[37m`)
                            });                            

                        }).catch((error) => {
                            console.log(error)
                        })

                        



