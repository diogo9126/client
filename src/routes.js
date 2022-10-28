import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

// import admin
import Dashboard from "./pages/admin/dashboard";
import Produtos from "./pages/admin/produtos";
import ProdutosEditar from "./pages/admin/produtos/produtos.editar";
import ProdutoCadastrar from "./pages/admin/produtos/produtos.cadastrar";

import Usuarios from "./pages/admin/usuarios";
import UsuariosEditar from "./pages/admin/usuarios/usuarios.editar";
import UsuariosCadastrar from "./pages/admin/usuarios/usuarios.cadastrar";

// import client 
import Home from "./pages/client/home";
import Painel from "./pages/client/painel";
import ProdutoDetalhes from "./pages/client/produtos/produtos.detalhes";


export default function MainRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas cliente*/}
                <Route path='/' exact element={<Home />} />
                <Route path='/produto/:idProduto' exact element={ <ProdutoDetalhes/>} />
                <Route path='/painel' element={ <Painel/>} />

                {/* Rotas usuarios*/}
                <Route path='/admin/usuarios' exact element= { <Usuarios/>}/>
                <Route path='/admin/usuarios/cadastrar' exact element={ <UsuariosCadastrar/>} />
                <Route path='/admin/usuarios/editar/:idUsuario'exact element={ < UsuariosEditar />} />
                

                {/* Rotas Admin */}
                <Route path='/admin' exact element={ <Dashboard />} />
                <Route path='/admin/produtos' exact element={ <Produtos />} />
                <Route path='/admin/produtos/cadastrar'exact element= { <ProdutoCadastrar />} />
                <Route path='/admin/produtos/editar/:idProduto' exact element= { <ProdutosEditar />} />

            </Routes>
        </BrowserRouter>
    )
}