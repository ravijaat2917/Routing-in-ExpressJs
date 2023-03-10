import express from 'express';

const app = express();
const port = process.env.port || '3000';

//Routes
app.get('/',(req,res)=>{
    res.send('Get Method');
});

// app.all('/sabkuch', (req,res)=>{
//     res.send('All Method');
// });

// app.all('*',(req,res)=>{
//     res.send('Page Not Found');
// });

// app.all('/api/*',(req,res)=>{
//     res.send('API Page');
// });

//String Pattern Path
app.get('/ab?cd',(req,res)=>{
    res.send(`this route path will match /acd and /abcd`);
})

// Regular Expression Path
// app.get(/a/ ,(req,res)=>{
//     res.send(`This is a`);
// })

// One callback
app.get('/cbexample1',(req,res)=>{
    res.send(`Callback Example`);
});

//More than  One callback
app.get('/cbexample2',(req,res,next)=>{
    console.log("First Callback");
    next();
},(req,res)=>{
    console.log("Second Callback");
    res.send(`More than One callback`);
});

//An array of callback
const cb1 = (req,res,next) =>{
    console.log("first callback");
    next();
}
const cb2 = (req,res,next) =>{
    console.log("second callback");
    next();
}
const cb3 = (req,res) =>{
    console.log("third callback");
    res.send("An array of callback example");
}
app.get('/cbexample3' , [cb1,cb2,cb3]);

// Chained route callback
// app.get('/student', (req,res)=>{
//     res.send('All Students')
// });
// app.post('/student', (req,res)=>{
//     res.send('Add New Students')
// });
// app.put('/student', (req,res)=>{
//     res.send('Update Students')
// });

app.route('/student')
    // .all((req,res,next)=>{
    //     console.log("first run this for all http methods");
    //     next();
    // })
    .get((req,res)=>{
        res.send('All Students')
    })
    .post((req,res)=>{
        res.send('Add New Students')
    })
    .put((req,res)=>{
        res.send('Update Students')
    });

app.listen(port,()=>{
    console.log(`Server Listening at http://localhost:${port}`);
});