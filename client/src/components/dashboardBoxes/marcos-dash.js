    import React, { useState } from 'react';
    import '../../App.css';

    function Macros() {
        const [macros, setMacros] = useState({ 
            carbs : 0,
            fats : 0,
            protein : 0,
            carbsGoal : 0,
            fatsGoal : 0, 
            proteinGoal : 0
        })

        const [change, setChange] = useState({
            carbs : false,
            fats : false,
            protein : false,
            carbsGoal : false,
            fatsGoal : false, 
            proteinGoal : false

        })

        const handleMacros = (e) => {
            const { name, value } = e.target
            e.preventDefault()
            setMacros({
                ...macros,
                [name] : value
            })
        }
        const handleChange = (e) => {
            const { name } = e.target
            e.preventDefault()
            setChange({
                ...change,
                [name] : !change[name]
            })
        }
    
        const fillerPercent = (unit, goal) => {
            return (unit/goal) * 100
        }
    
        return (
            <div className='sections'>
                <div>
                    <h2>Carbs</h2>
                    <div className='carb-progress'>
                        <div className='carb-filler' style={{ width: `${fillerPercent(macros.carbs, macros.carbsGoal)}%` }}>{macros.carbs}/{macros.carbsGoal}</div>
                    </div>
                    <div>
                        {change.carbs ? 
                        <form onSubmit={handleChange}>
                            <input
                                type='number'
                                name='carbs'
                                value={macros.carbs}
                                placeholder='Carbs Eaten'
                                onChange={handleMacros}
                            ></input>
                            <button
                                type='submit'
                                name='carbs'
                                value={macros.carbs}
                                onClick={handleChange}
                            >
                                Enter
                            </button>
                        </form> :
                        <button
                            name= 'carbs'
                            value={macros.carbs}
                            onClick={handleChange}
                        >
                            Carbs
                        </button>
                        }

                        {change.carbsGoal ? 
                        <form>
                            <input>

                            </input>
                            <button></button>
                        </form> :
                        <button
                            onClick={handleChange}
                        >
                            Carbs Goal 
                        </button>
                        }
                    </div>
                </div>
    
                <div>
                    <h2>Fats</h2>
                    <div className='fats-progress'>
                        <div className='fats-filler'></div>
                    </div>
                </div>
    
                <div>
                    <h2>Protein</h2>
                    <div className='protein-progress'>
                        <div className='protein-filler'></div>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Macros;