import AdminDrawer from '../../components/admin_drawer/admin_drawer'
import AddPost from '../../components/admin_drawer/crate_post/create_post'
import RegisterUser from '../../components/admin_drawer/register_user/register_user'
import ManageUser from '../../components/admin_drawer/user_management/user_accordeon'
import "./admin.css"

function AdminPanel() {
    return (
        <div>
            <AdminDrawer />
            <div id="output_field">
                <AddPost/>
            </div>
        </div>
    )
}

export default AdminPanel