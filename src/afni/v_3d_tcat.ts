// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TCAT_METADATA: Metadata = {
    id: "450d57b5070c55b43b4ad379402682bafc76dfbb.boutiques",
    name: "3dTcat",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTcatParameters {
    "__STYXTYPE__": "3dTcat";
    "rlt"?: "" | "+" | "++" | null | undefined;
    "in_files": InputPathType;
    "out_file"?: string | null | undefined;
    "outputtype"?: "NIFTI" | "AFNI" | "NIFTI_GZ" | null | undefined;
    "num_threads"?: number | null | undefined;
    "verbose": boolean;
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
        "3dTcat": v_3d_tcat_cargs,
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
        "3dTcat": v_3d_tcat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_tcat(...)`.
 *
 * @interface
 */
interface V3dTcatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file name.
     */
    out_file: OutputPathType;
}


function v_3d_tcat_params(
    in_files: InputPathType,
    rlt: "" | "+" | "++" | null = null,
    out_file: string | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    num_threads: number | null = null,
    verbose: boolean = false,
): V3dTcatParameters {
    /**
     * Build parameters.
    
     * @param in_files Input file to 3dtcat.
     * @param rlt '' or '+' or '++'. Remove linear trends in each voxel time series loaded from each input dataset, separately. option -rlt removes the least squares fit of 'a+b*t' to each voxel time series. option -rlt+ adds dataset mean back in. option -rlt++ adds overall mean of all dataset timeseries back in.
     * @param out_file Output image file name.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param num_threads Set number of threads.
     * @param verbose Print out some verbose output as the program.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTcat" as const,
        "in_files": in_files,
        "verbose": verbose,
    };
    if (rlt !== null) {
        params["rlt"] = rlt;
    }
    if (out_file !== null) {
        params["out_file"] = out_file;
    }
    if (outputtype !== null) {
        params["outputtype"] = outputtype;
    }
    if (num_threads !== null) {
        params["num_threads"] = num_threads;
    }
    return params;
}


function v_3d_tcat_cargs(
    params: V3dTcatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTcat");
    if ((params["rlt"] ?? null) !== null) {
        cargs.push(
            "-rlt",
            [(params["rlt"] ?? null), execution.inputFile((params["in_files"] ?? null))].join('')
        );
    }
    if ((params["out_file"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["out_file"] ?? null)
        );
    }
    if ((params["outputtype"] ?? null) !== null) {
        cargs.push((params["outputtype"] ?? null));
    }
    if ((params["num_threads"] ?? null) !== null) {
        cargs.push(String((params["num_threads"] ?? null)));
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    return cargs;
}


function v_3d_tcat_outputs(
    params: V3dTcatParameters,
    execution: Execution,
): V3dTcatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTcatOutputs = {
        root: execution.outputFile("."),
        out_file: execution.outputFile([path.basename((params["in_files"] ?? null)), "_tcat"].join('')),
    };
    return ret;
}


function v_3d_tcat_execute(
    params: V3dTcatParameters,
    execution: Execution,
): V3dTcatOutputs {
    /**
     * Concatenate sub-bricks from input datasets into one big 3D+time dataset.
     * TODO Replace InputMultiPath in_files with Traits.List, if possible. Current version adds extra whitespace.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTcatOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_tcat_cargs(params, execution)
    const ret = v_3d_tcat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_tcat(
    in_files: InputPathType,
    rlt: "" | "+" | "++" | null = null,
    out_file: string | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    num_threads: number | null = null,
    verbose: boolean = false,
    runner: Runner | null = null,
): V3dTcatOutputs {
    /**
     * Concatenate sub-bricks from input datasets into one big 3D+time dataset.
     * TODO Replace InputMultiPath in_files with Traits.List, if possible. Current version adds extra whitespace.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_files Input file to 3dtcat.
     * @param rlt '' or '+' or '++'. Remove linear trends in each voxel time series loaded from each input dataset, separately. option -rlt removes the least squares fit of 'a+b*t' to each voxel time series. option -rlt+ adds dataset mean back in. option -rlt++ adds overall mean of all dataset timeseries back in.
     * @param out_file Output image file name.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param num_threads Set number of threads.
     * @param verbose Print out some verbose output as the program.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTcatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TCAT_METADATA);
    const params = v_3d_tcat_params(in_files, rlt, out_file, outputtype, num_threads, verbose)
    return v_3d_tcat_execute(params, execution);
}


export {
      V3dTcatOutputs,
      V3dTcatParameters,
      V_3D_TCAT_METADATA,
      v_3d_tcat,
      v_3d_tcat_params,
};
