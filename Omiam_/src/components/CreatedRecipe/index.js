import { element } from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fileAction, difficultyAction, durationAction, titleAction, typeAction, etapeAction, postCreated, captionAction, toogleSteps, toogleStep9, toogleStep8, toogleStep7, toogleStep6, toogleStep5, toogleStep4, toogleSteps3, toogleSteps2, globalIngredients, ingredientAction, unitAction, quantityAction, fetchAction, toggleCreatedIngredients, toogleCreatedRecipe, toogleCreatedIngredients1, ingredientNameAction, unitAddAction, quantitiesAddAction, } from '../../action/createdRecipe';
import Etape from './Field/etapes';
import IngredientCreated from './IngredientCreated';
import Ingredient from './Ingredient';
import IngredientList from './IngredientList';
import Quantity from './Quantity';
import './styles.scss';
import Unit from './Unit';

function CreatedRecipe() {
  const dispatch = useDispatch();

  const valueTitle = useSelector((state) => state.title);
  const valueType = useSelector((state) => state.createdRecipe.category);
  const valueCaption = useSelector((state) => state.createdRecipe.captionAction);
  const valueDifficulty = useSelector((state) => state.createdRecipe.difficulty);
  const valueTime = useSelector((state) => state.createdRecipe.duration);

  const valueEtape = useSelector((state) => state.createdRecipe.steps.etape1);
  const valueEtape2 = useSelector((state) => state.createdRecipe.steps.etape2);
  const valueEtape3 = useSelector((state) => state.createdRecipe.steps.etape3);
  const valueEtape4 = useSelector((state) => state.createdRecipe.steps.etape4);
  const valueEtape5 = useSelector((state) => state.createdRecipe.steps.etape5);
  const valueEtape6 = useSelector((state) => state.createdRecipe.steps.etape6);
  const valueEtape7 = useSelector((state) => state.createdRecipe.steps.etape7);
  const valueEtape8 = useSelector((state) => state.createdRecipe.steps.etape8);
  const valueEtape9 = useSelector((state) => state.createdRecipe.steps.etape9);
  const toogleCreatedIngredient = useSelector((state) => state.createdRecipe.toggleCreatedIngredients);
  const toogle2 = useSelector((state) => state.createdRecipe.toogle2);

  const toogle3 = useSelector((state) => state.createdRecipe.toogle3);
  const toogle4 = useSelector((state) => state.createdRecipe.toogle4);
  const toogle5 = useSelector((state) => state.createdRecipe.toogle5);
  const toogle6 = useSelector((state) => state.createdRecipe.toogle6);
  const toogle7 = useSelector((state) => state.createdRecipe.toogle7);
  const toogle8 = useSelector((state) => state.createdRecipe.toogle8);
  const toogle9 = useSelector((state) => state.createdRecipe.toogle9);

  const listIngredientsFull = useSelector((state) => state.createdRecipe.listIngredients);


  const handleChangeTitle = ((evt) => {
    dispatch(titleAction(evt.target.value, 'title'));
  });
  const handleChangeType = ((evt) => {
    dispatch(typeAction(evt.target.value, 'category'));
  });
  const handleChangeDifficulty = ((evt) => {
    dispatch(difficultyAction(evt.target.value, 'difficulty'));
  });
  const handleChangeTime = ((evt) => {
    dispatch(durationAction(evt.target.value, 'duration'));
  });
  const handleChangeFile = ((evt) => {
    // console.log(evt.target.files[0]);
    dispatch(fileAction(evt.target.files[0]));
  });
  const handleSumbit = ((evt) => {
    evt.preventDefault();
    dispatch(postCreated());
    // dispatch(durationAction(evt.target.value, 'duration'));
  });
  useEffect(
    () => {
      dispatch(fetchAction());
    },
    [],
  );
  return (
    <>
      <div className="illustration" />
      <div className="createdRecipe">
        <h1>Créer une recette</h1>
        <form onSubmit={handleSumbit} action="/path/to/api" method="POST" encytpe="ENCTYPE_HERE">
          <div className="createdRecipe-label">
            <span className="label-title">Titre de la recette</span>
            <input
              type="text"
              onChange={handleChangeTitle}
              value={valueTitle}
              placeholder="Titre de la recette"
            />
          </div>
          <div className="createdRecipe-label">
            <span className="label-title">Description de la recette</span>
            <textarea
              id="caption"
              placeholder="Une histoire de Miam's..."
              rows="3"
              onChange={(evt) => dispatch(captionAction(evt.target.value, 'caption'))}
              value={valueCaption}
            />
          </div>
          <div className="createdRecipe-label">
            <span className="label-title">Catégorie</span>
            <div className="form-radio">
              <div className="form-radio-element" onChange={handleChangeType} >
                <label htmlFor="radio-type-1">
                  <input
                    name="type"
                    type="radio"
                    value={1}
                    checked={valueType === '1'}
                    id="radio-type-1"
                    onChange={handleChangeType}
                    required
                  />
                  <i className="icon-drink" id="radio-type-1" />
                  <span> Apéro</span>
                </label>
              </div>
              <div className="form-radio-element">
                <label htmlFor="radio-type-2">
                  <input
                    name="type"
                    type="radio"
                    value={2}
                    checked={valueType === '2'}
                    id="radio-type-2"
                    onChange={handleChangeType}
                  />
                  <i className="icon-entrance" id="radio-type-2" />
                  <span> Entrée</span>
                </label>
              </div>
              <div className="form-radio-element">
                <label htmlFor="radio-type-3">
                  <input
                    id="radio-type-3"
                    name="type"
                    type="radio"
                    value="3"
                    checked={valueType === '3'}
                    onChange={handleChangeType}
                  />
                  <i className="icon-dish" id="radio-type-3" />
                  <span> Plat</span>
                </label>
              </div>
              <div className="form-radio-element" >
                <label htmlFor="radio-type-4">
                  <input
                    id="radio-type-4"
                    name="type"
                    type="radio"
                    value="4"
                    checked={valueType === '4'}
                    onChange={handleChangeType}
                  />
                  <i className="icon-cakes" id="radio-type-4" />
                  <span> Dessert</span>
                </label>
              </div>
            </div>
          </div>
          <div className="createdRecipe-label">
            <span className="label-title">Difficulté</span>
            <div className="form-radio">
              <div className="form-radio-element" onChange={handleChangeDifficulty}>
                <label htmlFor="radio-dif-1">
                  <input
                    id="radio-dif-1"
                    type="radio"
                    value="1"
                    checked={valueDifficulty === '1'}
                    onChange={handleChangeDifficulty}
                    required
                  />
                  <i className="icon-difficulty-1" id="radio-dif-1"/>
                </label>
              </div>
              <div className="form-radio-element">
                <label htmlFor="radio-dif-2">
                  <input
                    id="radio-dif-2"
                    type="radio"
                    value="2"
                    checked={valueDifficulty === '2'}
                    onChange={handleChangeDifficulty}
                  /> 
                  <i className="icon-difficulty-2" id="radio-dif-2" />
                </label>
              </div>
              <div className="form-radio-element" htmlFor="radio1">
                <label htmlFor="radio-dif-3" required>
                  <input
                    id="radio-dif-3"
                    type="radio"
                    value="3"
                    checked={valueDifficulty === '3'}
                    onChange={handleChangeDifficulty}
                  />
                  <i className="icon-difficulty-3" id="radio-dif-3" />
                </label>
              </div>
            </div>
          </div>
          <div className="createdRecipe-label">
            <span className="label-title">Temps de préparation</span>
            <input
              type="number"
              placeholder="15"
              onChange={handleChangeTime}
              value={valueTime}
            />
            <span className="label-description"> minutes</span>
          </div>
          <div className="createdRecipe-label">
            <span className="label-title">Votre image</span>
            <input
              type="file"
              onChange={handleChangeFile}
              id="fileUpload"
            />
          </div>
          <div className="createdRecipe-label">
            <span className="label-title">Ingrédients pour 4 personnes.</span>
            <div className="ingredients">
              <div className="ingredient-list">
                <Ingredient onChange={(evt) => dispatch(ingredientAction(evt.target.value, 'ingredient0'))} />
                <Unit onChange={(evt) => dispatch(quantityAction(evt.target.value, 'quantity0'))} />
                <Quantity onChange={(evt) => dispatch(unitAction(evt.target.value, 'unit0'))} />
                <i className="icon-add" onClick={() => dispatch(toogleCreatedIngredients1())} />
              </div>
              <IngredientList />
              <div className="ingredient-created">
                {(toogleCreatedIngredient) ? (
                  <div className="ingredient-list">
                    <IngredientCreated
                      onChange={(evt) => dispatch(ingredientNameAction(evt.target.value, 'ingredient0'))}
                    />
                    <Unit onChange={(evt) => dispatch(quantitiesAddAction(evt.target.value, 'quantity0'))} />
                    <Quantity onChange={(evt) => dispatch(unitAddAction(evt.target.value, 'unit0'))} />
                  </div>
                ) : (
                  <span className="ingredient-created-button" onClick={() => dispatch(toggleCreatedIngredients())}>
                    Ajouter un ingrédient
                  </span>
                )}
              </div>
            </div>

          </div>
          <div className="createdRecipe-label">
            <span className="label-title">Étapes</span>
            <div className="steps">
              <div className="step-add">
                <span className="step-title">Étape 1</span>
                <div className="step">
                  <Etape
                    onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape1'))}
                    value={valueEtape}
                  />
                  {(toogle2) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleSteps())} />) }
                </div>
                {(toogle2) ? (
                  <>
                    <span className="step-title">Étape 2</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape2'))}
                        value={valueEtape2}
                      />
                      {(toogle3) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleSteps2())} />) }
                    </div>
                  </>
                ) : '' }
                {(toogle3) ? (
                  <>
                    <span className="step-title">Étape 3</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape3'))}
                        value={valueEtape3}
                      />
                      {(toogle4) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleSteps3())} />)}
                    </div>
                  </>
                ) : ''}
                {(toogle4) ? (
                  <>
                    <span className="step-title">Étape 4</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape4'))}
                        value={valueEtape4}
                      />
                      {(toogle5) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep4())} />) }
                    </div>
                  </>
                ) : ''}
                {(toogle5) ? (
                  <>
                    <span className="step-title">Étape 5</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape5'))}
                        value={valueEtape5}
                      />
                      {(toogle6) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep5())} />)}
                    </div>
                  </>
                ) : ''}
                {(toogle6) ? (
                  <>
                    <span className="step-title">Étape 6</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape6'))}
                        value={valueEtape6}
                      />
                      {(toogle7) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep6())} />) }
                    </div>
                  </>
                ) : ''}
                {(toogle7) ? (
                  <>
                    <span className="step-title">Étape 7</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape7'))}
                        value={valueEtape7}
                      />
                      {(toogle8) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep7())} />) }
                    </div>
                  </>
                ) : ''}
                {(toogle8) ? (
                  <>
                    <span className="step-title">Étape 8</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape8'))}
                        value={valueEtape8}
                      />
                      {(toogle9) ? '' : (<i className="icon-add" onClick={() => dispatch(toogleStep8())} />)}
                    </div>
                  </>
                ) : ''}
                {(toogle9) ? (
                  <>
                    <span className="step-title">Étape 9</span>
                    <div className="step">
                      <Etape
                        onChange={(evt) => dispatch(etapeAction(evt.target.value, 'etape9'))}
                        value={valueEtape9}
                      />
                      {(toogle8) ? (<i className="icon-add" onClick={() => dispatch(toogleStep9())} />) : '' }
                    </div>
                  </>
                ) : '' }

              </div>
              <button className="send-button" type="submit">
                <span className="send-button-submit">Envoyer</span>
                <i className="icon-oven" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatedRecipe;
