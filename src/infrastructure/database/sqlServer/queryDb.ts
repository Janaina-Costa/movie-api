const query = {
  create: `INSERT INTO tb_movie (id, name, image, genre, linkUrl, watchedDate, userOpinion, review, isFirstTimeWatching, quantityViews)
     VALUES (@id, @name, @image, @genre, @linkUrl, @watchedDate, @userOpinion, @review, @isFirstTimeWatching, @quantityViews);`,

  findAll: "SELECT * FROM tb_movie;",

  findOne: "SELECT * FROM tb_movie WHERE name LIKE '%' + @name + '%';",

  findById: "SELECT * FROM tb_movie WHERE id = @id;",

  update: `UPDATE tb_movie
          SET name=@name, image=@image, genre=@genre, linkUrl=@linkUrl, watchedDate=@watchedDate, userOpinion=@userOpinion, review=@review, isFirstTimeWatching=@isFirstTimeWatching, quantityViews=@quantityViews
          WHERE id = @id;
          `,

  delete: `DELETE tb_movie WHERE id=@id;`,

  count: `SELECT COUNT(*) FROM tb_movie;`,
};

export default query;
