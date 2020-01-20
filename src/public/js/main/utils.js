const rootEl = 'root';
const qprefix = 'q-';

class Utils
{
    qprefix()
    {
        return 'q-';
    }

    rootEl()
    {
        return 'root';
    }

    getCmp(selector)
    {
        return $('#' + selector)[0];
    }

    createId(name, id)
    {
        return qprefix + name + id;
    } 
}