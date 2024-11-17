const query = {
  create: `INSERT INTO tb_movie (id, name, image, genre, linkUrl, watchedDate, userOpinion, review, isFirstTimeWatching, quantityViews, created_at)
     VALUES (@id, @name, @image, @genre, @linkUrl, @watchedDate, @userOpinion, @review, @isFirstTimeWatching, @quantityViews, @created_at);`,

  findAll: "SELECT * FROM tb_movie;",

  findOne: "SELECT * FROM tb_movie WHERE name LIKE '%' + @name + '%';",

  findById: "SELECT * FROM tb_movie WHERE id = @id;",

  update: `UPDATE tb_movie
          SET name=@name, image=@image, genre=@genre, linkUrl=@linkUrl, watchedDate=@watchedDate, userOpinion=@userOpinion, review=@review, isFirstTimeWatching=@isFirstTimeWatching, quantityViews=@quantityViews, updated_at=@updated_at
          WHERE id = @id;
          `,

  delete: `DELETE tb_movie WHERE id=@id;`,

  count: `SELECT COUNT(*) FROM tb_movie;`,
};

export default query;
