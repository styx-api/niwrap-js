// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_NORMALITY_TEST_METADATA: Metadata = {
    id: "84f19a80cec9bb8cc70a78f7b9024502f6081aac.boutiques",
    name: "3dNormalityTest",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dNormalityTestParameters {
    "__STYXTYPE__": "3dNormalityTest";
    "input": InputPathType;
    "prefix": string;
    "noexp": boolean;
    "pval": boolean;
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
        "3dNormalityTest": v_3d_normality_test_cargs,
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
        "3dNormalityTest": v_3d_normality_test_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_normality_test(...)`.
 *
 * @interface
 */
interface V3dNormalityTestOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset with results
     */
    output_dataset: OutputPathType;
}


function v_3d_normality_test_params(
    input: InputPathType,
    prefix: string,
    noexp: boolean = false,
    pval: boolean = false,
): V3dNormalityTestParameters {
    /**
     * Build parameters.
    
     * @param input Specifies the input dataset
     * @param prefix Specifies the name for the output dataset
     * @param noexp Do not convert the A-D statistic to an exponentially distributed value
     * @param pval Output the results as a pure (estimated) p-value
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dNormalityTest" as const,
        "input": input,
        "prefix": prefix,
        "noexp": noexp,
        "pval": pval,
    };
    return params;
}


function v_3d_normality_test_cargs(
    params: V3dNormalityTestParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dNormalityTest");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["noexp"] ?? null)) {
        cargs.push("-noexp");
    }
    if ((params["pval"] ?? null)) {
        cargs.push("-pval");
    }
    return cargs;
}


function v_3d_normality_test_outputs(
    params: V3dNormalityTestParameters,
    execution: Execution,
): V3dNormalityTestOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dNormalityTestOutputs = {
        root: execution.outputFile("."),
        output_dataset: execution.outputFile([(params["prefix"] ?? null), "+orig.*"].join('')),
    };
    return ret;
}


function v_3d_normality_test_execute(
    params: V3dNormalityTestParameters,
    execution: Execution,
): V3dNormalityTestOutputs {
    /**
     * This program tests the input values at each voxel for normality using the Anderson-Darling method.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dNormalityTestOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_normality_test_cargs(params, execution)
    const ret = v_3d_normality_test_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_normality_test(
    input: InputPathType,
    prefix: string,
    noexp: boolean = false,
    pval: boolean = false,
    runner: Runner | null = null,
): V3dNormalityTestOutputs {
    /**
     * This program tests the input values at each voxel for normality using the Anderson-Darling method.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input Specifies the input dataset
     * @param prefix Specifies the name for the output dataset
     * @param noexp Do not convert the A-D statistic to an exponentially distributed value
     * @param pval Output the results as a pure (estimated) p-value
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dNormalityTestOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_NORMALITY_TEST_METADATA);
    const params = v_3d_normality_test_params(input, prefix, noexp, pval)
    return v_3d_normality_test_execute(params, execution);
}


export {
      V3dNormalityTestOutputs,
      V3dNormalityTestParameters,
      V_3D_NORMALITY_TEST_METADATA,
      v_3d_normality_test,
      v_3d_normality_test_params,
};
