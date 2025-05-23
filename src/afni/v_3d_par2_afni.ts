// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_PAR2_AFNI_METADATA: Metadata = {
    id: "8a1625af0dec0ca42ff6be27e5b3b994d19a0b23.boutiques",
    name: "3dPAR2AFNI",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dPar2AfniParameters {
    "__STYXTYPE__": "3dPAR2AFNI";
    "input_file": InputPathType;
    "skip_outliers_test": boolean;
    "output_nifti": boolean;
    "output_analyze": boolean;
    "output_dir"?: string | null | undefined;
    "verbose_flag": boolean;
    "gzip_files": boolean;
    "byte_swap_2": boolean;
    "byte_swap_4": boolean;
    "help_flag": boolean;
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
        "3dPAR2AFNI": v_3d_par2_afni_cargs,
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
        "3dPAR2AFNI": v_3d_par2_afni_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_par2_afni(...)`.
 *
 * @interface
 */
interface V3dPar2AfniOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Converted output files
     */
    output_files: OutputPathType;
}


function v_3d_par2_afni_params(
    input_file: InputPathType,
    skip_outliers_test: boolean = false,
    output_nifti: boolean = false,
    output_analyze: boolean = false,
    output_dir: string | null = null,
    verbose_flag: boolean = false,
    gzip_files: boolean = false,
    byte_swap_2: boolean = false,
    byte_swap_4: boolean = false,
    help_flag: boolean = false,
): V3dPar2AfniParameters {
    /**
     * Build parameters.
    
     * @param input_file Input PAR file (e.g., subject1.PAR)
     * @param skip_outliers_test Skip the outliers test when converting 4D files. The default is to perform the outliers test.
     * @param output_nifti Output NIfTI files instead of HEAD/BRIK. The default is to create HEAD/BRIK files.
     * @param output_analyze Output ANALYZE files instead of HEAD/BRIK.
     * @param output_dir The name of the directory where the created files should be placed. If this directory does not exist, the program exits without performing any conversion.
     * @param verbose_flag Be verbose in operation.
     * @param gzip_files Gzip the files created. The default is not to gzip the files.
     * @param byte_swap_2 2-Byte-swap the files created. The default is not to 2 byte-swap.
     * @param byte_swap_4 4-Byte-swap the files created. The default is not to 4 byte-swap.
     * @param help_flag Display help message.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dPAR2AFNI" as const,
        "input_file": input_file,
        "skip_outliers_test": skip_outliers_test,
        "output_nifti": output_nifti,
        "output_analyze": output_analyze,
        "verbose_flag": verbose_flag,
        "gzip_files": gzip_files,
        "byte_swap_2": byte_swap_2,
        "byte_swap_4": byte_swap_4,
        "help_flag": help_flag,
    };
    if (output_dir !== null) {
        params["output_dir"] = output_dir;
    }
    return params;
}


function v_3d_par2_afni_cargs(
    params: V3dPar2AfniParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dPAR2AFNI.pl");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    if ((params["skip_outliers_test"] ?? null)) {
        cargs.push("-s");
    }
    if ((params["output_nifti"] ?? null)) {
        cargs.push("-n");
    }
    if ((params["output_analyze"] ?? null)) {
        cargs.push("-a");
    }
    if ((params["output_dir"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_dir"] ?? null)
        );
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["gzip_files"] ?? null)) {
        cargs.push("-g");
    }
    if ((params["byte_swap_2"] ?? null)) {
        cargs.push("-2");
    }
    if ((params["byte_swap_4"] ?? null)) {
        cargs.push("-4");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function v_3d_par2_afni_outputs(
    params: V3dPar2AfniParameters,
    execution: Execution,
): V3dPar2AfniOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dPar2AfniOutputs = {
        root: execution.outputFile("."),
        output_files: execution.outputFile([path.basename((params["input_file"] ?? null)), "_converted"].join('')),
    };
    return ret;
}


function v_3d_par2_afni_execute(
    params: V3dPar2AfniParameters,
    execution: Execution,
): V3dPar2AfniOutputs {
    /**
     * Convert Philips PAR/REC files to AFNI's BRIK/HEAD, NIfTI, or ANALYZE format.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dPar2AfniOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_par2_afni_cargs(params, execution)
    const ret = v_3d_par2_afni_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_par2_afni(
    input_file: InputPathType,
    skip_outliers_test: boolean = false,
    output_nifti: boolean = false,
    output_analyze: boolean = false,
    output_dir: string | null = null,
    verbose_flag: boolean = false,
    gzip_files: boolean = false,
    byte_swap_2: boolean = false,
    byte_swap_4: boolean = false,
    help_flag: boolean = false,
    runner: Runner | null = null,
): V3dPar2AfniOutputs {
    /**
     * Convert Philips PAR/REC files to AFNI's BRIK/HEAD, NIfTI, or ANALYZE format.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Input PAR file (e.g., subject1.PAR)
     * @param skip_outliers_test Skip the outliers test when converting 4D files. The default is to perform the outliers test.
     * @param output_nifti Output NIfTI files instead of HEAD/BRIK. The default is to create HEAD/BRIK files.
     * @param output_analyze Output ANALYZE files instead of HEAD/BRIK.
     * @param output_dir The name of the directory where the created files should be placed. If this directory does not exist, the program exits without performing any conversion.
     * @param verbose_flag Be verbose in operation.
     * @param gzip_files Gzip the files created. The default is not to gzip the files.
     * @param byte_swap_2 2-Byte-swap the files created. The default is not to 2 byte-swap.
     * @param byte_swap_4 4-Byte-swap the files created. The default is not to 4 byte-swap.
     * @param help_flag Display help message.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dPar2AfniOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_PAR2_AFNI_METADATA);
    const params = v_3d_par2_afni_params(input_file, skip_outliers_test, output_nifti, output_analyze, output_dir, verbose_flag, gzip_files, byte_swap_2, byte_swap_4, help_flag)
    return v_3d_par2_afni_execute(params, execution);
}


export {
      V3dPar2AfniOutputs,
      V3dPar2AfniParameters,
      V_3D_PAR2_AFNI_METADATA,
      v_3d_par2_afni,
      v_3d_par2_afni_params,
};
