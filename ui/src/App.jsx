import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import NotFoundpage from './pages/NotFoundpage'
import Contactpage from './pages/Contactpage'
import MainLayout from './Layouts/MainLayout'
import AuthLayout from './Layouts/AuthLayout'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import LightWeight from './pages/LightWeight'
import MediumWeight from './pages/MediumWeight'
import HeavyWeight from './pages/HeavyWeight'
import MediumGain from './pages/MediumGain'
import MediumLoss from './pages/MediumLoss'
import LightGain from './pages/LightGain'
import LightLoss from './pages/LightLoss'
import Articles from './pages/Articles'
import ArticlePage, { articleLoader } from './pages/ArticlePage'
import AddArticlepage from './pages/AddArticlepage'
import EditArticlePage from './pages/EditArticlepage'
import MediumArticles from './pages/MediumArticles'
import LightLossArticles from './pages/LightLossArticles'
import LightGainArticles from './pages/LightGainArticles'
import HeavyWeightArticle from './pages/HeavyWeightArticle'
import AddDietplanPage from './pages/AddDietplanPage'
import DietplanPage, { dietplanLoader } from './pages/DietplanPage'
import EditDietplanPage from './pages/EditDietplanPage'
import Dietplans from './pages/Dietplans'
import MediumDietplans from './pages/MediumDietplans'
import LightLossDietplans from './pages/LightLossDietplans'
import LightGainDietplans from './pages/LightGainDietplans'
import HeavyWeightDietplans from './pages/HeavyWeightDietplans'
import About from './pages/About'
import PremiumLight from './pages/PremiumLight'
import PreLightGain from './pages/PrelightGain'
import PreLightArticles from './pages/PreLightArticles'
import GetPre from './pages/GetPre'
import AdminDashboard from './pages/AdminDashboard'
import AdminSignUp from './pages/AdminSignUp'
import PreLightDietplans from './pages/PreLightDietplans'
import PreLightLossArticles from './pages/PreLightLossArticles'
import PreLightLossDietplans from './pages/PreLightLossDietplans'
import PreLightLoss from './pages/PreLightLoss'
import PremiumMedium from './pages/PremiumMedium'
import PreMedGain from './pages/PreMedGain'
import PreMedLoss from './pages/PreMedLoss'
import PreMedArticles from './pages/PreMedArticles'
import PreMedDietplans from './pages/PreMedDietplans'
import PreMedLossDietplans from './pages/PreMedLossDietplans'
import PreMedLossArticles from './pages/PreLightLossArticles'
import PremiumHeavy from './pages/PremiumHeavy'
import PreHeavyArticles from './pages/PreHeavyArticles'
import PreHeavyDietplans from './pages/PreHeavyDietplans'
import LightGainWorkout from './pages/LightGainWorkout'
import PreLightGainWorkout from './pages/PreLightGainWorkout'
import PreLWGWPages from './pages/PreLWGWPages'
import HeavyWeightLossPage from './pages/PreHWPages'
import MediumWeightLossPage from './pages/PreMWLWPages'
import MediumWeightGainPage from './pages/PreMWGWPage'
import LWGWPage from './pages/LWGWPage'
import PreLWLWPages from './pages/PreLWLWPage'
import LWLWPage from './pages/LWLWPage'
import HWPages from './pages/HWPages'
import MWLGPage from './pages/MWLGPage'
import MWGWPage from './pages/MWGWPage'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <> 

    <Route path = "/" element = {<AuthLayout />}>
    <Route index element = {<HomePage />}/>
    <Route path = "/login" element = {<LoginPage/>}/>
    <Route path="/signup" element={<SignupPage/>}/>
    <Route path="/lightweight" element={<LightWeight/>} />
    <Route path="/mediumweight" element={<MediumWeight/>} />
    <Route path="/heavyweight" element={<HeavyWeight/>} />
    <Route path="/mediumweight-gain" element={<MediumGain/>} />
    <Route path="/mediumweight-loss" element={<MediumLoss/>} />
    <Route path="/lightweight-gain" element={<LightGain/>} />
    <Route path="/lightweight-loss" element={<LightLoss/>} />
    <Route path='/mediumgainarticles' element={<Articles/>}/> 
    <Route path='/articles/:id' element={<ArticlePage/>} loader={articleLoader}/>  
    <Route path='/edit-article/:id' element = {<EditArticlePage/>} loader={articleLoader}/>
    <Route path='/addarticle' element={<AddArticlepage/>}/>
    <Route path='/mediumlossarticles' element={<MediumArticles/>}/>
    <Route path='/lightlossarticles' element={<LightLossArticles/>}/>
    <Route path='/lightgainarticles' element={<LightGainArticles/>}/>
    <Route path='/heavylossarticles' element={<HeavyWeightArticle/>}/>
    <Route path='/mediumlossdietplans' element={<MediumDietplans/>}/>
    <Route path='/mediumgaindietplans' element={<Dietplans/>}/>
    <Route path='/lightlossdietplans' element={<LightLossDietplans/>}/>
    <Route path='/lightgaindietplans' element={<LightGainDietplans/>}/>
    <Route path='/heavylossdietplans' element={<HeavyWeightDietplans/>}/>
    <Route path='/workout' element={<LightGainWorkout/>}/>


    <Route path='/mediumgaindietplans' element={<Dietplans/>}/>
    <Route path='/adddietplan' element={<AddDietplanPage/>}/>
    <Route path='/dietplans/:id' element={<DietplanPage/>} loader={dietplanLoader}/>
    <Route path='/edit-dietplan/:id' element = {<EditDietplanPage/>} loader={dietplanLoader}/>
    <Route path='/aboutus' element = {<About/>}/>
    <Route path='/contactus' element = {<Contactpage/>}/>



    <Route path='/premium/lightweight' element = {<PremiumLight/>}/>
    <Route path='/premium/lightweight-gain' element = {<PreLightGain/>}/>
    <Route path='/premium/lightweight-gain-articles' element = {<PreLightArticles/>}/>
    <Route path ='/premium/lightweight-gain-dietplans' element = {<PreLightDietplans/>}/>
    <Route path ='/premium/workout' element = {<PreLightGainWorkout/>}/>

    <Route path='/getpremium' element = {<GetPre/>}/>
    <Route path='/premium/lightweight-loss' element = {<PreLightLoss/>}/>
    <Route path='/premium/lightweight-loss-articles' element = {<PreLightLossArticles/>}/>
    <Route path='/premium/lightweight-loss-dietplans' element = {<PreLightLossDietplans/>}/>
    <Route path="premium/workouts/light-weight-gain" element={<PreLWGWPages />} />
    <Route path="premium/workouts/light-weight-loss" element={<PreLWLWPages />} />


    <Route path='/premium/mediumweight' element = {<PremiumMedium />}/>
    <Route path='/premium/mediumweight-gain' element = {<PreMedGain/>}/>
    <Route path='/premium/mediumweight-loss' element = {<PreMedLoss/>}/>
    <Route path='/premium/mediumweight-gain-articles' element = {<PreMedArticles/>}/>
    <Route path='/premium/mediumweight-gain-dietplans' element = {<PreMedDietplans/>}/>
    <Route path='/premium/mediumweight-loss-articles' element = {<PreMedLossArticles/>}/>
    <Route path='/premium/mediumweight-loss-dietplans' element = {<PreMedLossDietplans/>}/>
    <Route path="premium/workouts/medium-weight-gain" element={<MediumWeightGainPage />} />
    <Route path="premium/workouts/medium-weight-loss" element={<MediumWeightLossPage/>} />



    <Route path='/premium/heavyweight' element={<PremiumHeavy/>}/>
    <Route path='/premium/heavyweight-loss-articles' element={<PreHeavyArticles/>}/>
    <Route path='/premium/heavyweight-loss-dietplans' element={<PreHeavyDietplans/>}/>
    <Route path="/premium/workouts/heavy-weight-loss" element={<HeavyWeightLossPage />} />



    <Route path="/workouts/light-weight-gain" element={<LWGWPage />} />
    <Route path="/workouts/light-weight-loss" element={<LWLWPage />} />
    <Route path="/workouts/medium-weight-gain" element={<MWGWPage />} />
    <Route path="/workouts/medium-weight-loss" element={<MWLGPage/>} />
    <Route path="/workouts/heavy-weight-loss" element={<HWPages />} />


    <Route path='*' element={<NotFoundpage/>}/>
    <Route path='/contact' element={<Contactpage/>}/> 



    </Route>

    <Route path='/' element={<MainLayout/>}>
 
    <Route path="/admin" element={<AdminDashboard/>} /> 
    <Route path='/admin-signup'element={<AdminSignUp/>} />

    </Route>

    
    </>

  ))

  return (
<>
<RouterProvider router={router}/>

</>


  )
}

export default App
