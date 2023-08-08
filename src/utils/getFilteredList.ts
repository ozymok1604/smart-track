const getFilteredList = (list: any[]) =>
  list.reduce((o, i) => {
    if (!o.find((v: any) => v.id == i.id)) {
      o.push(i);
    }
    return o;
  }, []);

export { getFilteredList };
