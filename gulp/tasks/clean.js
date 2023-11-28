import { deleteAsync } from 'del'

export async function deleteFolder() {
    return deleteAsync(app.path.clean);
}