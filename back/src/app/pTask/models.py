# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Task(models.Model):
    cd = models.CharField(primary_key=True, max_length=12, db_comment='コード')
    title = models.CharField(max_length=20, db_comment='タイトル')
    content = models.TextField(blank=True, null=True, db_comment='内容')
    create_date = models.DateTimeField(blank=True, null=True, db_comment='作成日時')
    create_user = models.CharField(max_length=8, db_comment='作成者')
    update_date = models.DateTimeField(blank=True, null=True, db_comment='更新日時')
    update_user = models.CharField(max_length=8, blank=True, null=True, db_comment='更新者')

    class Meta:
        managed = False
        db_table = 'task'
        db_table_comment = 'タスク'


class TaskOption(models.Model):
    cd = models.CharField(primary_key=True, max_length=12, db_comment='コード')
    name = models.CharField(max_length=20, db_comment='名称')
    option_type = models.CharField(max_length=20, db_comment='オプションタイプ')
    default_value = models.CharField(max_length=20, blank=True, null=True, db_comment='デフォルト値')
    create_date = models.DateTimeField(blank=True, null=True, db_comment='作成日時')
    create_user = models.CharField(max_length=8, db_comment='作成者')
    update_date = models.DateTimeField(blank=True, null=True, db_comment='更新日時')
    update_user = models.CharField(max_length=8, blank=True, null=True, db_comment='更新者')

    class Meta:
        managed = False
        db_table = 'task_option'
        db_table_comment = 'タスクオプション'


class TaskOptionRelation(models.Model):
    task_cd = models.OneToOneField(Task, models.DO_NOTHING, db_column='task_cd', primary_key=True, db_comment='タスクコード')  # The composite primary key (task_cd, option_item_cd) found, that is not supported. The first column is selected.
    option_item_cd = models.ForeignKey(TaskOption, models.DO_NOTHING, db_column='option_item_cd', db_comment='オプションコード')
    value = models.CharField(max_length=20, blank=True, null=True, db_comment='値')
    create_date = models.DateTimeField(blank=True, null=True, db_comment='作成日時')
    create_user = models.CharField(max_length=8, db_comment='作成者')
    update_date = models.DateTimeField(blank=True, null=True, db_comment='更新日時')
    update_user = models.CharField(max_length=8, blank=True, null=True, db_comment='更新者')

    class Meta:
        managed = False
        db_table = 'task_option_relation'
        unique_together = (('task_cd', 'option_item_cd'),)
        db_table_comment = 'タスク・オプション関連'


class TaskParentChild(models.Model):
    cd = models.OneToOneField(Task, models.DO_NOTHING, db_column='cd', primary_key=True, db_comment='コード')
    parent_cd = models.ForeignKey(Task, models.DO_NOTHING, db_column='parent_cd', related_name='taskparentchild_parent_cd_set', db_comment='親コード')
    create_date = models.DateTimeField(blank=True, null=True, db_comment='作成日時')
    create_user = models.CharField(max_length=8, db_comment='作成者')
    update_date = models.DateTimeField(blank=True, null=True, db_comment='更新日時')
    update_user = models.CharField(max_length=8, blank=True, null=True, db_comment='更新者')

    class Meta:
        managed = False
        db_table = 'task_parent_child'
        db_table_comment = 'タスク親子'


class TaskTemplate(models.Model):
    cd = models.CharField(primary_key=True, max_length=12, db_comment='コード')
    name = models.CharField(max_length=20, db_comment='名称')
    create_date = models.DateTimeField(blank=True, null=True, db_comment='作成日時')
    create_user = models.CharField(max_length=8, db_comment='作成者')
    update_date = models.DateTimeField(blank=True, null=True, db_comment='更新日時')
    update_user = models.CharField(max_length=8, blank=True, null=True, db_comment='更新者')

    class Meta:
        managed = False
        db_table = 'task_template'
        db_table_comment = 'タスク雛形'


class TaskTemplateOption(models.Model):
    task_temp_cd = models.OneToOneField(TaskTemplate, models.DO_NOTHING, db_column='task_temp_cd', primary_key=True, db_comment='雛形コード')  # The composite primary key (task_temp_cd, task_option_cd) found, that is not supported. The first column is selected.
    task_option_cd = models.ForeignKey(TaskOption, models.DO_NOTHING, db_column='task_option_cd', db_comment='オプションコード')
    value = models.CharField(max_length=20, blank=True, null=True, db_comment='値')
    create_date = models.DateTimeField(blank=True, null=True, db_comment='作成日時')
    create_user = models.CharField(max_length=8, db_comment='作成者')
    update_date = models.DateTimeField(blank=True, null=True, db_comment='更新日時')
    update_user = models.CharField(max_length=8, blank=True, null=True, db_comment='更新者')

    class Meta:
        managed = False
        db_table = 'task_template_option'
        unique_together = (('task_temp_cd', 'task_option_cd'),)
        db_table_comment = 'タスク雛形・オプション関連'
