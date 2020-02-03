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
    
    addStyle(cmpId, className) {
        this.getCmp(cmpId).classList.add(className);
     }
 
     addEvent(cmpId, name, callback) {
        this.getCmp(cmpId).addEventListener(name, callback);
     }

    createComponent(root, type)
    {
        var cmp = {};
        var count = 0;

        if(type === 'button')
        {
            cmp.xtype = 'btn';
            count = btnCount += 1;
        } else if (type === 'panel')
        {
            cmp.xtype = 'pnl';
            cmp.items = [];
            count = pnlCount += 1;
        }

        cmp.type = type;
        cmp.root = root;
        cmp.prefix = type;
        cmp.text = type + ' ' + count;
        cmp.renderer = false;

        cmp.id = this.createId(cmp.prefix, count);

        return cmp;
    }
}