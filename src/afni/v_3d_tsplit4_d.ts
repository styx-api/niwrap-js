// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TSPLIT4_D_METADATA: Metadata = {
    id: "3a3e4440f95ee533103d741ae69655e18e88d3db.boutiques",
    name: "3dTsplit4D",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTsplit4DParameters {
    "__STYXTYPE__": "3dTsplit4D";
    "prefix": string;
    "infile": InputPathType;
    "keep_datum": boolean;
    "digits"?: number | null | undefined;
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
        "3dTsplit4D": v_3d_tsplit4_d_cargs,
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
        "3dTsplit4D": v_3d_tsplit4_d_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_tsplit4_d(...)`.
 *
 * @interface
 */
interface V3dTsplit4DOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Multiple 3D single-brick output files
     */
    outfiles: OutputPathType;
}


function v_3d_tsplit4_d_params(
    prefix: string,
    infile: InputPathType,
    keep_datum: boolean = false,
    digits: number | null = null,
): V3dTsplit4DParameters {
    /**
     * Build parameters.
    
     * @param prefix Prefix of the output datasets (e.g., out/epi)
     * @param infile Input 3D+time dataset (e.g., epi_r1+orig)
     * @param keep_datum Output uses original datum (no conversion to float)
     * @param digits Number of digits to use for output filenames
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTsplit4D" as const,
        "prefix": prefix,
        "infile": infile,
        "keep_datum": keep_datum,
    };
    if (digits !== null) {
        params["digits"] = digits;
    }
    return params;
}


function v_3d_tsplit4_d_cargs(
    params: V3dTsplit4DParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTsplit4D");
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    if ((params["keep_datum"] ?? null)) {
        cargs.push("-keep_datum");
    }
    if ((params["digits"] ?? null) !== null) {
        cargs.push(
            "-digits",
            String((params["digits"] ?? null))
        );
    }
    return cargs;
}


function v_3d_tsplit4_d_outputs(
    params: V3dTsplit4DParameters,
    execution: Execution,
): V3dTsplit4DOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTsplit4DOutputs = {
        root: execution.outputFile("."),
        outfiles: execution.outputFile([(params["prefix"] ?? null), "*"].join('')),
    };
    return ret;
}


function v_3d_tsplit4_d_execute(
    params: V3dTsplit4DParameters,
    execution: Execution,
): V3dTsplit4DOutputs {
    /**
     * Convert a 3D+time dataset into multiple 3D single-brick files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTsplit4DOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_tsplit4_d_cargs(params, execution)
    const ret = v_3d_tsplit4_d_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_tsplit4_d(
    prefix: string,
    infile: InputPathType,
    keep_datum: boolean = false,
    digits: number | null = null,
    runner: Runner | null = null,
): V3dTsplit4DOutputs {
    /**
     * Convert a 3D+time dataset into multiple 3D single-brick files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Prefix of the output datasets (e.g., out/epi)
     * @param infile Input 3D+time dataset (e.g., epi_r1+orig)
     * @param keep_datum Output uses original datum (no conversion to float)
     * @param digits Number of digits to use for output filenames
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTsplit4DOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TSPLIT4_D_METADATA);
    const params = v_3d_tsplit4_d_params(prefix, infile, keep_datum, digits)
    return v_3d_tsplit4_d_execute(params, execution);
}


export {
      V3dTsplit4DOutputs,
      V3dTsplit4DParameters,
      V_3D_TSPLIT4_D_METADATA,
      v_3d_tsplit4_d,
      v_3d_tsplit4_d_params,
};
