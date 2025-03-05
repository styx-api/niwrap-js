// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const R_PKGS_INSTALL_METADATA: Metadata = {
    id: "9c9d4c7ec7df54a4bd835bc8c7156ea51895da44.boutiques",
    name: "rPkgsInstall",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface RPkgsInstallParameters {
    "__STYXTYPE__": "rPkgsInstall";
    "packages": string;
    "download_site"?: string | null | undefined;
    "check": boolean;
    "update": boolean;
    "remove": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "rPkgsInstall": r_pkgs_install_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "rPkgsInstall": r_pkgs_install_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `r_pkgs_install(...)`.
 *
 * @interface
 */
interface RPkgsInstallOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output R packages after installation, update, or removal
     */
    output_packages: OutputPathType;
}


function r_pkgs_install_params(
    packages: string,
    download_site: string | null = null,
    check: boolean = false,
    update: boolean = false,
    remove: boolean = false,
): RPkgsInstallParameters {
    /**
     * Build parameters.
    
     * @param packages List of R packages to install, update, or remove. Use 'ALL' to refer to all AFNI-required packages.
     * @param download_site Specify the package repository website. Default is 'http://cloud.r-project.org'.
     * @param check Verify whether the specified R packages are installed on the computer without installing/updating/removing them.
     * @param update Update the specified R packages. If packages are not installed, they will be installed.
     * @param remove Remove the specified R packages from the system.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "rPkgsInstall" as const,
        "packages": packages,
        "check": check,
        "update": update,
        "remove": remove,
    };
    if (download_site !== null) {
        params["download_site"] = download_site;
    }
    return params;
}


function r_pkgs_install_cargs(
    params: RPkgsInstallParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("rPkgsInstall");
    cargs.push(
        "-pkgs",
        (params["packages"] ?? null)
    );
    if ((params["download_site"] ?? null) !== null) {
        cargs.push(
            "-site",
            (params["download_site"] ?? null)
        );
    }
    if ((params["check"] ?? null)) {
        cargs.push("-check");
    }
    if ((params["update"] ?? null)) {
        cargs.push("-update");
    }
    if ((params["remove"] ?? null)) {
        cargs.push("-remove");
    }
    return cargs;
}


function r_pkgs_install_outputs(
    params: RPkgsInstallParameters,
    execution: Execution,
): RPkgsInstallOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RPkgsInstallOutputs = {
        root: execution.outputFile("."),
        output_packages: execution.outputFile([(params["packages"] ?? null)].join('')),
    };
    return ret;
}


function r_pkgs_install_execute(
    params: RPkgsInstallParameters,
    execution: Execution,
): RPkgsInstallOutputs {
    /**
     * A tool for installing, checking, updating, or removing R packages for AFNI.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RPkgsInstallOutputs`).
     */
    params = execution.params(params)
    const cargs = r_pkgs_install_cargs(params, execution)
    const ret = r_pkgs_install_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function r_pkgs_install(
    packages: string,
    download_site: string | null = null,
    check: boolean = false,
    update: boolean = false,
    remove: boolean = false,
    runner: Runner | null = null,
): RPkgsInstallOutputs {
    /**
     * A tool for installing, checking, updating, or removing R packages for AFNI.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param packages List of R packages to install, update, or remove. Use 'ALL' to refer to all AFNI-required packages.
     * @param download_site Specify the package repository website. Default is 'http://cloud.r-project.org'.
     * @param check Verify whether the specified R packages are installed on the computer without installing/updating/removing them.
     * @param update Update the specified R packages. If packages are not installed, they will be installed.
     * @param remove Remove the specified R packages from the system.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RPkgsInstallOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(R_PKGS_INSTALL_METADATA);
    const params = r_pkgs_install_params(packages, download_site, check, update, remove)
    return r_pkgs_install_execute(params, execution);
}


export {
      RPkgsInstallOutputs,
      RPkgsInstallParameters,
      R_PKGS_INSTALL_METADATA,
      r_pkgs_install,
      r_pkgs_install_params,
};
