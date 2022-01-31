    import React, { useState } from 'react';
    import '../../App.css';

    function Macros() {
        const [macros, setMacros] = useState({ 
            carbs : 50,
            fats : 50,
            protein : 50,
            carbsGoal : 75,
            fatsGoal : 75, 
            proteinGoal : 75
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
            <div className='sub-sections'>
                <div>
                    <h2 className='macro-header'>Carbs</h2>

                    <div className='progress-wrapper carbs-wrapper'>
                        <div className='progress-filler carbs-filler' style={{ width: `${fillerPercent(macros.carbs, macros.carbsGoal)}%` }}>{macros.carbs}/{macros.carbsGoal}</div>
                    </div>

                    <div>
                        {change.carbs ? 
                        <form>
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
                                onClick={handleChange}
                            >
                                Enter
                            </button>
                        </form> :
                        <button
                            name= 'carbs'
                            onClick={handleChange}
                        >
                            Carbs
                        </button>
                        }

                        {change.carbsGoal ? 
                        <form>
                            <input
                                type='number'
                                name='carbsGoal'
                                value={macros.carbsGoal}
                                placeholder='Carbs Goal'
                                onChange={handleMacros}                            
                            ></input>
                            <button
                                type='submit'
                                name='carbsGoal'
                                onClick={handleChange}
                            >
                                Enter
                            </button>
                        </form> :
                        <button
                            name= 'carbsGoal'
                            onClick={handleChange}
                        >
                            Carbs Goal 
                        </button>
                        }
                    </div>
                </div>
    
                <div>
                    <h2 className='macro-header'>Fats</h2>

                    <div className='progress-wrapper fats-progress'>
                        <div className='progress-filler fats-filler' style={{ width: `${fillerPercent(macros.fats, macros.fatsGoal)}%` }}>{macros.fats}/{macros.fatsGoal}</div>
                    </div>

                    <div>
                        {change.fats ? 
                        <form>
                            <input
                                type='number'
                                name='fats'
                                value={macros.fats}
                                placeholder='Fats Eaten'
                                onChange={handleMacros}
                            ></input>
                            <button
                                type='submit'
                                name='fats'
                                onClick={handleChange}
                            >
                                Enter
                            </button>
                        </form> :
                        <button
                            name= 'fats'
                            onClick={handleChange}
                        >
                            Fats
                        </button>
                        }

                        {change.fatsGoal ? 
                        <form>
                            <input
                                type='number'
                                name='fatsGoal'
                                value={macros.fatsGoal}
                                placeholder='Fats Goal'
                                onChange={handleMacros}                            
                            ></input>
                            <button
                                type='submit'
                                name='fatsGoal'
                                onClick={handleChange}
                            >
                                Enter
                            </button>
                        </form> :
                        <button
                            name= 'fatsGoal'
                            onClick={handleChange}
                        >
                            Fats Goal 
                        </button>
                        }
                    </div>
                </div>
    
                <div>
                    <h2 className='macro-header'>Protein</h2>

                    <div className='progress-wrapper protein-progress'>
                        <div className='progress-filler protein-filler' style={{ width: `${fillerPercent(macros.protein, macros.proteinGoal)}%` }}>{macros.protein}/{macros.proteinGoal}</div>
                    </div>

                    <div>
                        {change.protein ? 
                        <form>
                            <input
                                type='number'
                                name='protein'
                                value={macros.protein}
                                placeholder='Protein Eaten'
                                onChange={handleMacros}
                            ></input>
                            <button
                                type='submit'
                                name='protein'
                                onClick={handleChange}
                            >
                                Enter
                            </button>
                        </form> :
                        <button
                            name= 'protein'
                            onClick={handleChange}
                        >
                            Protein
                        </button>
                        }

                        {change.proteinGoal ? 
                        <form>
                            <input
                                type='number'
                                name='proteinGoal'
                                value={macros.proteinGoal}
                                placeholder='Protein Goal'
                                onChange={handleMacros}                            
                            ></input>
                            <button
                                type='submit'
                                name='proteinGoal'
                                onClick={handleChange}
                            >
                                Enter
                            </button>
                        </form> :
                        <button
                            name= 'proteinGoal'
                            onClick={handleChange}
                        >
                            Protein Goal 
                        </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
    
    export default Macros;