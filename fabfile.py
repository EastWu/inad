from fabric.api import run, local, task, env, settings

env.name = "inad"
env.user = "inad"
env.path = "/home/inad/apps/inad.com/"
env.hosts = ['inad.com']


@task
def deploy():
    run("cd %(path)s; git pull origin master" % env)
