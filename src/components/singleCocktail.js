import { Box } from '@mui/material';
import { useParams,Link } from 'react-router-dom';
import { fetchSingleCocktail } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect,useState } from 'react';

const SingleCocktail=()=>{
    const {cocktail, loading}=useSelector((state)=>({...state.dada}));
    const [modifiedCocktail, setModifiedCocktail]=useState(null);
    const {id}=useParams();
    let dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchSingleCocktail(id));
    }, [id]);

    useEffect(() => {
        if(cocktail.length > 0){
            const {
                strDrink:name,
                strDrinkThumb:image,
                strAlcoholic:info,
                strCategory:category,
                strGlass:glass,
                strInstructions:instructions,
                srtIngredient1,
                srtIngredient2,
                srtIngredient3,
                srtIngredient4,
                srtIngredient5,
            }=cocktail[0];
            const ingredients=[
                srtIngredient1,
                srtIngredient2,
                srtIngredient3,
                srtIngredient4,
                srtIngredient5,
            ];
                const newCocktail={
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                };
setModifiedCocktail(newCocktail);
            } else{
                setModifiedCocktail(null);
            }
        },[id, cocktail]);
        if(!modifiedCocktail){
            return <h2 className="section-Title">No cocktail to display</h2>;
        } else{
            const {name, image, category,info,glass,instructions,ingredients } =
            modifiedCocktail;
            return(
                <>
                {loading ? (
                    <div className="spinner-grow" role="status">
                    <span className="visually-hidden">loading...</span>
                    </div>
                ) :(
                    <section className="section cocktail-section">
                        <Link to="/">
                            <button className="btn btn-danger" style={{marginTop: "2rem"}}>
                            Back to Cockctails
                            </button>
                        </Link>
                        <h2 className="section-title">{name}</h2>
                        <div className="drink">
                            <img src={image} alt={name} />
                            <div className="drink-info">
                                <p>
                                    <span className="drink-data">Name:</span>{name}
                                </p>
                                <p>
                                    <span className="drink-data">Category:</span>{category}
                                </p>
                                <p>
                                    <span className="drink-data">Info:</span>{info}
                                </p>
                                <p>
                                    <span className="drink-data">Glass:</span>{glass}
                                </p>
                                <p>
                                    <span className="drink-data">Instructions:</span>{instructions}
                                </p>
                            </div>
                        </div>
                    </section>
                )
                }
                </>

            );
        }
};
export default SingleCocktail;