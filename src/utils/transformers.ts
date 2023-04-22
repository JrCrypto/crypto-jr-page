const trasformers = {
  members: (data: any) => {
    return data.map(async (todo: any) => {
      return {
        id: todo.id,
        title: todo.properties.Name.title[0].plain_text,
        assignedTo: todo.properties.Assign.people,
        dateCreated: todo.properties["Date Created"].created_time,
        dueDate: todo.properties["Due Date"]?.date || null,
        priority: todo.properties.Priority.select,
        status: todo.properties.Status?.select.name || null,
      };
    });
  },

  partners: () => {
    return [];
  },
};

export default trasformers;
