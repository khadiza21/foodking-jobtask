import HeroBanner from "../components/HeroBanner/HeroBanner";


const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <h1>home</h1>
            <button class="relative inline-block px-6 py-3 font-semibold text-white border border-white overflow-hidden group">
                <span class="absolute inset-0 w-0 h-full bg-white transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0 group-hover:rounded-full"></span>
                <span class="relative z-10 text-white group-hover:text-[#b62124] transition duration-300">Hover Me</span>
            </button>


            <h1 className='bg-slate-500 py-4 px-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore minus dicta consequuntur ea voluptatem quia alias, officiis rem distinctio repudiandae amet eveniet laudantium earum soluta, doloremque sequi? Dolore praesentium veritatis ab aliquid a unde numquam nisi libero quas culpa. Facilis illo sit possimus voluptatibus quos?</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>




<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>



        </div>
    );
};

export default Home;