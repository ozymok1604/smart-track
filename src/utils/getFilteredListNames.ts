const getFilteredListNames = (list: any[]) =>
  list.reduce((o, i) => {
    if (!o.find((v: any) => v.name == i.name)) {
      o.push(i);
    }
    return o;
  }, []);

export { getFilteredListNames };
