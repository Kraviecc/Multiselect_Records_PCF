import { IColumnObject } from '../MultiselectRecords.types'
export class Utilities {
    static parseColumns = (columns: string): [IColumnObject] => {
        let parsedColumns: any = [];
        const arrayColumns = columns.split(';');
        var index = 1;

        arrayColumns.forEach(column => {
            var newColumn: any = {} as any;
            var splitColumn = column.split(',');
            const displayName = splitColumn[0].trim();
            const fieldName = splitColumn[1].trim();
            newColumn.fieldName = fieldName;
            newColumn.name = displayName;
            newColumn.isResizable = true;
            newColumn.key = "column" + index;
            newColumn.minWidth = 300;
            newColumn.maxWidth;
            index++;
            parsedColumns.push(newColumn);
        });

        return parsedColumns;
    }

    static isJson(item: string) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;

        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }

        if (typeof item === "object" && item !== null) {
            return true;
        }

        return false;
    }

    static compare(columns: IColumnObject[], a: ComponentFramework.WebApi.Entity, b: ComponentFramework.WebApi.Entity): number {
        const compareField = columns[0].fieldName;
        if (a[compareField] < b[compareField]) {
            return -1;
        }
        if (a[compareField] > b[compareField]) {
            return 1;
        }
        return 0;
    }
}